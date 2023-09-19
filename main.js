

const videos = [
    {
        link :"https://ipfs.io/ipfs/bafybeif6tsoynjuriqqn3pj67kdd4fs5funez4aisff2xcqonyndawj5my/animation.mp4",
        id: 2
    },
    {
        link :"https://ipfs.io/ipfs/bafybeif37sto2skrkaug7ybyprojwxvrekzgzqg4somlry7z6obuoi2orq/animation.mp4",
        id: 3
    },
    {
        link :"https://ipfs.io/ipfs/bafybeieybqqpdj3goc6jhwr3cl43boa4pww24fathglgujb3coddhzovnm/animation.mp4",
        id: 5
    },
    {
        link :"https://ipfs.io/ipfs/bafybeihkmnbd6qg4itfpehe3upmlpe4gphypgx5gqg5ggaxiqvavlfbvyu/animation.mp4",
        id: 7
    },
    {
        link :"https://ipfs.io/ipfs/bafybeidalq4nv4kkoxgf4xyc257gcd33bsit7bady6clkd4hpwgaidbb3i/animation.mp4",
        id: 11
    },
    {
        link :"https://openseauserdata.com/files/fd5822287b136affdafa241278f03fa1.mp4",
        id: 13
    },{
        link :"https://ipfs.io/ipfs/bafybeihzqd3auxobbx7vginnfsqjiubvyy3a3bcwcmom6wlcw4p7dzerze/animation.mp4",
        id: 17
    },
    {
        link: "https://ipfs.io/ipfs/bafybeiaq3gecpr6xguhlr2hzlci3hpanbirms5sigkwpcryug4ycx3gk7u/animation.mp4",
        id: 19
    },
    {
        link :"https://openseauserdata.com/files/0011e78f89ad6ee364861534604f7424.mp4",
        id: 23
    },
    {
        link :"https://openseauserdata.com/files/0006ef2d0d09f6c8e2ed54161cd3665f.mp4",
        id: 29
    },
    {
        link :"https://openseauserdata.com/files/7bb0ba62b60fd40c40ead322a38ee4ca.mp4",
        id: 31
    },
    {
        link :"https://openseauserdata.com/files/d128efe54901a5f876765e51268f81f5.mp4",
        id: 37
    },
    {
        link :"https://ipfs.io/ipfs/bafybeicndf3d3nkh2nvvyrwefddo3zxzprjky3zrtepbb25gomvmuewsoa/animation.mp4",
        id: 41
    },
    {
        link :"https://ipfs.io/ipfs/bafybeifxbkboprbe6coarf3o44a3ifqllf7yi5xojqwyppyfa52gizqhda/animation.mp4",
        id: 43  
    },
    {
        link :"https://openseauserdata.com/files/f81321c5257f3471635f5c318189e04c.mp4",
        id: 47
    },
    {
        link :"https://openseauserdata.com/files/4398c252884f6a70258976863927cbe4.mp4",
        id: 53
    },
    {
        link :"https://ipfs.io/ipfs/bafybeielq2fuxvgubq4hty677myoqkuqco5uuiis3vihi277jlc4ckgwaq/animation.mp4",
        id: 59
    },
    {
        link :"https://ipfs.io/ipfs/bafybeidb5mncqk6lbwb34l66kp6ag5xixjxnmt7gqtqahk2634rirpd664/animation.mp4",
        id: 61
    },
    {
        link :"https://openseauserdata.com/files/8181800d6dbdf4d260dca019c6750c03.mp4",
        id: 67
    },
    {
        link :"https://ipfs.io/ipfs/bafybeihm4clycqk4gipmpfkr4o4hehqjbof2uavku7xmjowrew6ogajytm/animation.mp4",
        id: 71
    },
    {
        link :"https://ipfs.io/ipfs/bafybeih4coryluwe46zscwmvw3fvjteanoxsvza4cvqwfwp77qyxaogliu/animation.mp4",
        id: 73
    },
    {
        link :"https://ipfs.io/ipfs/bafybeifzw5wtyv3v5daqgjangnpdmqdrsjpdyckfabyer7b6w7ft4r3esq/animation.mp4",
        id: 79
    },
    {
        link :"https://openseauserdata.com/files/8612bebf5f7c0cc71ef1c24191248ecc.mp4",
        id: 83
    },
    {
        link :"https://ipfs.io/ipfs/bafybeig5ts4sdjbkffsfpggzq5xk2hqn4cevpdk4o7edgwu4rq44ihvkie/animation.mp4",
        id: 89
    },
    {
        link :"https://ipfs.io/ipfs/bafybeiex4z7yoymw6iw37bry467vtn2a46n2apmibvmtdukzhm7lclnzyu/animation.mp4",
        id: 97
    }
]

let currIndex = -1;

var channelNumber = document.getElementsByClassName("channel-number");
var tvBox = document.getElementsByClassName("tv-box");
var videoPlayer = document.getElementsByClassName("video-player");

function handleNext(){
    document.getElementById("img-static").style.display = 'none';
    document.getElementById("video-player").style.display = 'block';
    // document.getElementById("content").style.height = 'fit-content';
    document.getElementById("video-player").removeAttribute("controls")

    videoPlayer[0].addEventListener("ended", function() {
        videoPlayer[0].currentTime = 0;
        videoPlayer[0].play();
      }); 
    if(currIndex < videos.length){
        currIndex += 1;
    }else{
        currIndex = 0;
    }

    console.log("Next Index = ", channelNumber[0].textContent );
    channelNumber[0].textContent = "VRS-" + videos[currIndex].id 

    videoPlayer[0].src = videos[currIndex].link;
    videoPlayer[0].load();
    
    // var source = document.createElement('source');

    // source.setAttribute('src', videos[currIndex].link);
    // source.setAttribute('type', 'video/mp4');
    // videoPlayer[0].appendChild(source);
    // videoPlayer[0].load();
}


function handleBack (){
    document.getElementById("img-static").style.display = 'none';
    document.getElementById("video-player").style.display = 'block';
    // document.getElementById("content").style.height = 'fit-content';
    document.getElementById("video-player").removeAttribute("controls")

    videoPlayer[0].addEventListener("ended", function() {
    videoPlayer[0].currentTime = 0;
    videoPlayer[0].play();
  });
    if(currIndex >= 1){
        currIndex -= 1;
    }else{
        currIndex = videos.length-1
    }
    console.log("Back Index = ", currIndex ); 
    channelNumber[0].textContent = "VRS-" + videos[currIndex].id 
    videoPlayer[0].src = videos[currIndex].link;
    videoPlayer[0].load();
}