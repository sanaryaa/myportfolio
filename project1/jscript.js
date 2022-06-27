
function resize(){
    let url = document.getElementById('url').value;
    let height = document.getElementById('hgt').value;
    let width = document.getElementById('wid').value;
    let lastIndex = url.lastIndexOf('/');
    let lastPart = url.substring(lastIndex);
   let  generatedUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;
    
    document.getElementById('newImg').src=`${generatedUrl}`;
    document.getElementById('newImg').style.display='block';
    //alert(generatedUrl);
    let urlout=document.getElementById('newUrl');
    urlout.style.display='block';
    urlout.innerHTML=`<i class="bi bi-clipboard-fill"></i> ${generatedUrl}`;
}

