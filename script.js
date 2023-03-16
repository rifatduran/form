const i0 = document.getElementById("input-first-name")
const n0 = document.getElementById("notice-first-name")
const i1 = document.getElementById("input-last-name")
const n1 = document.getElementById("notice-last-name")
const i2 = document.getElementById("input-email")
const n2 = document.getElementById("notice-email")
const i3 = document.getElementById("input-password")
const n3 = document.getElementById("notice-password")
const i4 = document.getElementById("input-telephone")
const n4 = document.getElementById("notice-telephone")
const i5 = document.getElementById("input-bio")
const n5 = document.getElementById("notice-bio")
const bttn = document.querySelector("button")

let input = [i0, i1, i2, i3, i4, i5]
let notice = [n0, n1, n2, n3, n4, n5]

let not = [
    { inf: "First name must be alphanumeric and contain 3 - 16 characters" },
    { inf: "Last name must be alphanumeric and contain 3 - 16 characters" },
    { inf: "Email must be a valid addres, e.g. example@example.com" },
    { inf: "Pasword must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters" },
    { inf: "A valid Telephone number (11 digits and 333-333-3344)" },
    { inf: "Bio must contain only lowercase letters, underscores, hypens and be 8 - 50 characters" },
]

let num = [0, 0, 0, 0, 0, 0]

document.body.addEventListener("keypress", e => {

    let i = num.indexOf(1)
    if (i == -1) {
        i = num.indexOf(3)
    }

    let word = ""

    switch (i) {
        case 0:

            let reg0 = input[i].value

            word = reg0.match(/[a-zA-Z\s]/g).toString().replace(/,/gi, "")
            let sp = reg0.match(/\s/g)

            input[i].value = word

            if (word.length >= 3 + sp && word.length <= 16 + sp) {
                num[i] = 3
                notice[i].innerHTML = ""
                input[i].style.borderColor = "rgb(10, 226, 17)"
                console.log(num);
            } else {
                num[i] = 1
                notice[i].textContent = not[i].inf
                input[i].style.borderColor = "coral"
            }
            break;

        case 1:

            let reg1 = input[i].value

            word = reg1.match(/[a-zA-Z\s]/g).toString().replace(/,/gi, "")
            let sp1 = reg1.match(/\s/g)

            input[i].value = word

            if (word.length >= 3 + sp1 && word.length <= 16 + sp1) {
                num[i] = 3
                notice[i].innerHTML = ""
                input[i].style.borderColor = "rgb(10, 226, 17)"
                console.log(num);
            } else {
                num[i] = 1
                notice[i].textContent = not[i].inf
                input[i].style.borderColor = "coral"
            }
            break;

        case 2:

            word = input[i].value

            if(e.keyCode == 13){
                if (word.endsWith(".com") == true && word.indexOf("@") >= 5 && word.indexOf(".") >= word.indexOf("@")+4) {
                    num[i] = 3
                    notice[i].innerHTML = ""
                    input[i].style.borderColor = "rgb(10, 226, 17)"
                    console.log(num);
                } else {
                    num[i] = 1
                    notice[i].textContent = not[i].inf
                    input[i].style.borderColor = "coral"
                }
            }else{
                if (word.endsWith(".co") == true && word.indexOf("@") >= 5 && word.indexOf(".") >= word.indexOf("@")+4 && e.keyCode == 109) {
                    num[i] = 3
                    notice[i].innerHTML = ""
                    input[i].style.borderColor = "rgb(10, 226, 17)"
                    console.log(num);
                } else {
                    num[i] = 1
                    notice[i].textContent = not[i].inf
                    input[i].style.borderColor = "coral"
                }
            }
            

            break;

        case 3:

            let reg3 = input[i].value

            word = reg3.match(/[a-zA-Z@_-]/g)

            if (word != null) {

                word = reg3.match(/[a-zA-Z@_-]/g).toString().replace(/,/gi, "")
            }

            input[i].value = word

            if (word == null) {

                input[i].value = ""

            } else if (word.length >= 5 && word.length <= 19 && e.keyCode != 13) {

                notice[i].innerHTML = ""
                input[i].style.borderColor = "rgb(10, 226, 17)"
                num[i] = 3
                console.log(num);

            } else if (word.length >= 6 && word.length <= 20 && e.keyCode == 13) {

                notice[i].innerHTML = ""
                input[i].style.borderColor = "rgb(10, 226, 17)"
                num[i] = 3
                console.log(num);

            } else {

                num[i] = 1
                notice[i].textContent = not[i].inf
                input[i].style.borderColor = "coral"

            }
            break;

        case 4:

            let reg = input[i].value

            word = reg.match(/\d+/gi)

            word = word.toString().replace(/,/gi, "")


            if (e.keyCode == 13) {

                if (word == null) {

                    input[i].value = ""

                } else if (word.length < 4) {

                    input[i].value = word.slice(0, word.length)

                } else if (word.length >= 4 && word.length < 7) {

                    input[i].value = `${word.slice(0, 3)}-${word.slice(3, word.length)}`

                } else if (word.length > 6) {

                    input[i].value = `${word.slice(0, 3)}-${word.slice(3, 6)}-${word.slice(6, word.length)}`

                }

                if (word.length == 10) {

                    notice[i].innerHTML = ""
                    input[i].style.borderColor = "rgb(10, 226, 17)"
                    num[i] = 3
                    console.log(num);

                } else {

                    num[i] = 1
                    notice[i].textContent = not[i].inf
                    input[i].style.borderColor = "coral"

                }
            } else {

                if (word == null) {

                    input[i].value = ""

                } else if (word.length < 3) {

                    input[i].value = word.slice(0, word.length)

                } else if (word.length >= 3 && word.length < 6) {

                    input[i].value = `${word.slice(0, 3)}-${word.slice(3, word.length)}`

                } else if (word.length > 5) {

                    input[i].value = `${word.slice(0, 3)}-${word.slice(3, 6)}-${word.slice(6, word.length)}`

                }

                if (word.length == 9) {

                    notice[i].innerHTML = ""
                    input[i].style.borderColor = "rgb(10, 226, 17)"
                    num[i] = 3
                    console.log(num);

                } else {

                    num[i] = 1
                    notice[i].textContent = not[i].inf
                    input[i].style.borderColor = "coral"

                }
            }

            break;

        case 5:

            let reg5 = input[i].value

            word = reg5.match(/[a-zA-Z-_\s]/g).toString().replace(/,/gi, "")

            let sp5 = reg5.match(/\s/g)

            if (sp5 == null) { sp5 = [] }

            if (word == null) {
                input[i].value = ""
                num[i] = 1
                notice[i].textContent = not[i].inf
                input[i].style.borderColor = "coral"
            }

            if (e.keyCode != 13) {
                if (word.length >= 7 + sp5.length && word.length <= 49 + sp5.length && word == input[i].value) {
                    notice[i].innerHTML = ""
                    input[i].style.borderColor = "rgb(10, 226, 17)"
                    num[i] = 3
                    console.log(num);
                } else {
                    num[i] = 1
                    notice[i].textContent = not[i].inf
                    input[i].style.borderColor = "coral"
                }
            } else {
                if (word.length >= 8 + sp5.length && word.length <= 50 + sp5.length) {
                    notice[i].innerHTML = ""
                    input[i].style.borderColor = "rgb(10, 226, 17)"
                    num[i] = 3
                    console.log(num);
                } else {
                    num[i] = 1
                    notice[i].textContent = not[i].inf
                    input[i].style.borderColor = "coral"
                }
            }

            break;

        default:
            break;
    }

    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }

    if (sum == 13) {

        bttn.addEventListener('mouseover', function () {
            bttn.style.backgroundColor = 'rgb(11, 159, 16)';
        });
        bttn.addEventListener('click', e => {
            let profile = {
                name: input[0].value,
                last_name: input[1].value,
                email: input[2].value,
                password: input[3].value,
                tel: input[4].value,
                bio: input[5].value,
            }
            console.log(profile);
        })

    } else {
        bttn.addEventListener('mouseover', function () {
            bttn.style.backgroundColor = 'coral';
        });

        bttn.addEventListener('mouseout', function () {
            bttn.style.backgroundColor = 'rgb(67, 67, 67)';
        });
    }

})

for (let i = 0; i < 6; i++) {

    input[i].addEventListener("click", e => {

        for (let i = 0; i < 6; i++) {
            if (num[i] == 1) {
                num[i] = 0
            }
        }

        if (num[i] == 2) {
            num[i] = 3
        } else {
            num[i] = 1
        }
        if (num.indexOf(3) != num.lastIndexOf(3)) {
            (num.indexOf(3) == i) ? num[num.lastIndexOf(3)] = 2 : num[num.indexOf(3)] = 2
        } else if (num.indexOf(3) != i && num.indexOf(3) != -1) {
            num[num.indexOf(3)] = 2
        }
        console.log(num);
        if (input[i].value < 10) {
            notice[i].textContent = not[i].inf
        }
    })

}

