
const API=""; //your API key

const searchVideos=async()=> {
    try {
        const q=document.getElementById("query").value;
        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`
        );
        const data=await res.json();
        append(data.items);
        
    }catch(err){
        console.log(err);
    }
};

const append=(videos) => {
    let show_videos=document.getElementById("show_videos");
    show_videos.innerHTML=null;
    videos.forEach(({id:{videoId},snippet:{title}})=>{
        let div=document.createElement("div");
        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}`;
        iframe.width="100%";
        iframe.height="100%";
        iframe.allow="fullscreen";

        let name=document.createElement("h5");

        name.innerText=title;
        div.append(iframe,name);
        show_videos.append(div);
    });
};

