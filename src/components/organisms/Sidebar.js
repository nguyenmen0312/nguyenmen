  
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCookies } from "react-cookie";
import * as Setting from './../../constants/Setting';
import * as ApiCaller from './../../helpers/index';


function Sidebar(props) {
    const [cookies, removeCookie]=useCookies([""]);
    let history= useHistory();
    const token = cookies.access_token;
    function Logout() {
        if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
            try {
              ApiCaller.handleGet("api/auth/logout", token)
                .then((res) => {
                  removeCookie('access_token');
                  removeCookie('user_info');
                  history.push('/login')
                })
                .catch((err) => {
                  console.log(err);
                });
            } catch (err) {
              alert(err);
            };
          }
    }
  return (
      
    <div className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div className="c-sidebar-brand d-lg-down-none">
        <svg className="c-sidebar-brand-full" width={118} height={46} alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#full" />
        </svg>
        <svg className="c-sidebar-brand-minimized" width={46} height={46} alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#signet" />
        </svg>
      </div>
      <ul className="c-sidebar-nav">
        <li onClick={Logout} className="c-sidebar-nav-item"><a   className="c-sidebar-nav-link" role="button">
          <svg className="c-sidebar-nav-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-speedometer" />
          </svg> đăng xuất<span className="badge badge-info"></span></a></li>
      </ul>
      <button className="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized" />
    </div>
  );
}

export default Sidebar;