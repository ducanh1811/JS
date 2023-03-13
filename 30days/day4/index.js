var image = document.querySelectorAll('.pic');
var gallery = document.querySelector('.gallery');
var gallery_inner = document.querySelector('.gallery-inner');
var control = document.querySelectorAll('.control');
var close = document.querySelector('.close');

image.forEach(img => {
    img.addEventListener('click', function() {
        gallery.classList.add('show');
        var src = this.getAttribute('src');
        //console.log(src);
        gallery_inner.src = src;
    });
});

document.addEventListener('click', function(e) {
    if(e.target.classList.contains('gallery') && !e.target.classList.contains('gallery_inner') && !e.target.classList.contains('control') && !e.target.classList.contains('close')) {
        gallery.classList.remove('show');
    }
});

close.addEventListener('click', function() {
    gallery.classList.remove('show');
});

document.addEventListener('keydown', function(e) {
    if(e.key == 'Escape') {
        gallery.classList.remove('show');
    }
});

control.forEach(btn => {
    btn.addEventListener('click', function() {
        //console.log('clicked' + btn.classList);
        var src = gallery_inner.getAttribute('src');
        //console.log(src);
        let index = parseInt(src.slice(src.length - 6, src.length - 5));;
        //console.log(parseInt(src.slice(src.length - 6, src.length - 5)));
        if(this.classList.contains('next')) {
            index++;
            //console.log(btn.classList);
            if(index > 7) {
                btn.classList.toggle('hide');
                control[0].classList.toggle('hide');
            }
        } else if(this.classList.contains('prev')) {
            index--;
            if(index < 2) {
                btn.classList.toggle('hide');
                control[1].classList.toggle('hide');
            }
        }
        gallery_inner.src = src.slice(0, src.length - 6) + index + '.jpeg';
        //console.log(src.slice(0, src.length - 6) + index + '.jpeg');
    });
});

