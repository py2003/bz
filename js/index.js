window.addEventListener('load',function(){
    var lbt=document.querySelector('.lbt');
    var ul=lbt.querySelector('ul');
    var ol=document.querySelector('ol');
    var zb=document.querySelector('.zb');
    var yb=document.querySelector('.yb');
    var flag=true;
    lbt.addEventListener('mouseover',function(){
        zb.style.display='block';
        yb.style.display='block';
        clearInterval(timer);
        timer=null;
    })
    lbt.addEventListener('mouseout',function(){
        zb.style.display='none';
        yb.style.display='none';
        timer= setInterval(function(){
            yb.click();
            },3000)
    })
    for(var i=0;i<ul.children.length;i++){
        var li=document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        ol.children[0].className='hs'
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            this.className='hs';
            var index=this.getAttribute('index');
            animate(ul,-index*lbt.offsetWidth);
        })
    }
    var num=0;
    var sum=0;
    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);
    yb.addEventListener('click',function(){
        if(flag){
            flag=false;
            if(num==ul.children.length-1){
                num=0;
                ul.style.left=0;
            }
            num++;
            animate(ul,-num*lbt.offsetWidth,function(){
                flag=true;
            })
            sum++;
            if(sum>=ol.children.length){
                sum=0;
            }
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[sum].className='hs';
        }
    })
    zb.addEventListener('click',function(){
       if(flag){
        flag=false;
        if(num==0){
            num=ul.children.length-1;
            ul.style.left=(ul.children.length-1)*lbt.offsetWidth;
        }
        num--;
        animate(ul,-num*lbt.offsetWidth,function(){
            flag=true;
        })
        sum--;
        if(sum<0){
            sum=ol.children.length-1;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        ol.children[sum].className='hs';
       }
    })
   var timer= setInterval(function(){
    yb.click();
    },3000)
    

    var mian=document.querySelector('.main');
    var hd=document.querySelector('.hd');
    var db=document.querySelector('.db');
    var sp=document.querySelectorAll('.sp');
    var head=document.querySelector('.head');
    var a=head.querySelectorAll('a');
    var p=head.querySelectorAll('p');
    document.addEventListener('scroll',function(){
        if(window.pageYOffset>=mian.offsetTop){
            hd.style.position='fixed';
            hd.style.top=20+'px';
            db.style.display='block';
        }
        else{
            db.style.display='none';
            hd.style.position='absolute';
            hd.style.top=270+'px';
        }
    })
    db.addEventListener('click',function(){
        window.scroll(0,0);
    })
})