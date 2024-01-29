const form = document.querySelector('form');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const height = document.querySelector('#height').value
            const weight = document.querySelector('#weight').value
            const result = document.querySelector('.result')
            if (height === '' || height <= 0 || isNaN(height)) {
                result.innerHTML = `Please give me valid height ${height}`;
            }
            else if (weight === '' || weight <= 0 || isNaN(weight)) {
                result.innerHTML = `Please give me valid height ${weight}`;
            }
            else {
                const BMI = (weight / ((height * height) / 10000)).toFixed(2)
                if (BMI < 18.6) {
                    result.innerHTML = `<span>${BMI} : You are the Under Weight</span>`;
                    result.style.color = "red";

                }
                else if (BMI >= 18.6 &&  BMI <= 24.9) {
                    result.innerHTML = `<span>${BMI} : You are the Normal Weight</span>`
                    result.style.color = "green";

                }
                else if (BMI > 24.9) {
                    result.innerHTML = `<span>${BMI} : You are the Overweight</span>`;
                    result.style.color = "red";

                }

            }
        })