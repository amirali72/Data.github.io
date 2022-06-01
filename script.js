let counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerHTML = 0;

    function updateCounter() {
        const targetNum = +counter.getAttribute('data-target')
        // console.log(targetNum);
        const initialNum = +counter.innerHTML;
        const num = targetNum/100;

        if(initialNum<targetNum){
            counter.innerHTML = `${initialNum+num}`
        }
        setTimeout(updateCounter, 1);
        
    }

    updateCounter();
});