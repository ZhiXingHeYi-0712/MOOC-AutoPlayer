function getVideoLength() {
    player = document.getElementsByClassName("xt_video_player")[0]
    if (player == undefined) {
        return -1
    } else {
        return player.duration
    }
}

function getVideoSituationTime() {
    player = document.getElementsByClassName("xt_video_player")[0]
    if (player == undefined) {
        return -1
    } else {
        return player.currentTime
    }
}

function playVideo() {
    player = document.getElementsByClassName("xt_video_player")[0]
    player.play()
}

function getVideoList() {
    list = document.getElementsByTagName("nav")[2].getElementsByTagName("li")

    var links = new Array(list.length)

    for (i = 0; i < list.length; i++) {
        links[i] = "http://scut.xuetangx.com" + list[i].getElementsByTagName("a")[0].getAttribute("href").toString()
    }

    return links
}

function getCurrentVideo() {
    return "http://scut.xuetangx.com" + document.getElementsByTagName("nav")[2].getElementsByClassName("active")[1].getElementsByTagName("a")[0].getAttribute("href").toString()
}

function isVideoOver() {
    return (getVideoLength() == getVideoSituationTime()) || (getVideoLength() + getVideoSituationTime() < 0)
}

function jumpToNext(VideoList) {
    if (isVideoOver()) {
        alert("over")
        currentVideoIndex = VideoList.findIndex(function (value, index, arr) {
            return value == getCurrentVideo()
        })
        alert(currentVideoIndex)
        if (currentVideoIndex == VideoList.length) {
            alert("功德圆满")
        } else {
            window.location = VideoList[currentVideoIndex + 1]
        }
    }
}

links = getVideoList()

setTimeout(function() { playVideo() }, 5000)
setInterval(function() { jumpToNext(links) }, 5000)
