hello = () => {
    alert("xin chào ")
    let a = 100 + 200;
    console.log(a)

    let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    console.log("độ dài mảng là: " + arr.length);
    console.log("phần tử chỉ số 7 là: " + arr[7]);
    //xóa phần tử thứ 5
    arr.splice(5, 1)//5 là chỉ số vị trí phần tử bạn bắt đầu muốn xóa , 1 là số phần tử bạn muốn xóa
    console.log("mang sau khi xóa phần tử chỉ số thứ 5: " + arr);
    //dùng từ khóa MAP tìm ra 1 mảng mới nhân 3 giá trị mảng lên 
    let arr1 = [1, 2, 3, 4];
    let arrnew = arr1.map(i => i * 3);
    console.log(arrnew);
}
hello()





//removeEventListener(arr[1])
