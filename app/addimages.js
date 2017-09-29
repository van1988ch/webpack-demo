import '../styles/addimage.css'
let smallImg = document.createElement('img')
// 必须 require 进来
smallImg.src = require('../images/1.png')
document.body.appendChild(smallImg)

//et bigImg = document.createElement('img')
//bigImg.src = require('../images/0.png')
//document.body.appendChild(bigImg)
