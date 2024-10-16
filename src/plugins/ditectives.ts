export default {
    moveable: {
        mounted: function (el: HTMLDivElement, binding: { value: any }) {
            let keydownBtn = binding.value && el.querySelector(binding.value) || el;
            let startPosition = {
                x: 0,
                y: 0
            };
            let movePosition = {
                x: 0,
                y: 0
            };
            let position = {
                top: 0,
                left: 0
            };
            let isMoving = false;
            function mousemoveFn(e: MouseEvent){
                if (!isMoving) {
                    return;
                }
                movePosition = {
                    x: position.left + e.x - startPosition.x,
                    y: position.top + e.y - startPosition.y,
                };
                
                movePosition.x = Math.max(0, movePosition.x);
                movePosition.x = Math.min(document.documentElement.clientWidth - el.clientWidth, movePosition.x);
                
                movePosition.y = Math.max(0, movePosition.y);
                movePosition.y = Math.min(document.documentElement.clientHeight - el.clientHeight, movePosition.y);
                el.style.left = movePosition.x + 'px';
                el.style.top = movePosition.y + 'px';
            }
            function mouseupFn() {
                isMoving = false;
                document.removeEventListener('mousemove', mousemoveFn);
                document.removeEventListener('mouseup', mouseupFn);
            }
            function mousedownFn(e: MouseEvent) {
                startPosition = {
                    x: e.x,
                    y: e.y
                };
                position = {
                    top: el.offsetTop,
                    left: el.offsetLeft
                };
                let positionType = getComputedStyle(el).position;
                if (positionType === 'static') {
                    el.style.position = 'absolute';
                }
                isMoving = true;
                document.addEventListener('mousemove', mousemoveFn);
                document.addEventListener('mouseup', mouseupFn);
            }
            keydownBtn.addEventListener('mousedown', mousedownFn);
        }
    }
}