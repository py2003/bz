window.addEventListener('load',function(){
    var head=document.querySelector('.head_zj');
    var ipt=head.querySelector('input');
    ipt.addEventListener('focus',function(){
        if(ipt.value=='假面幼崽：空我登场！'){
            this.value='';
        }
        this.style.color='#000';
    })
    ipt.addEventListener('blur',function(){
        if(ipt.value==''){
            this.value='假面幼崽：空我登场！';
        }
        this.style.color='#ccc'
    })
})