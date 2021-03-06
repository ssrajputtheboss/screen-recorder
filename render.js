let recorder = null
let m=0,s=0,ele = document.getElementById('timer'),interval=null,head=document.getElementById("head")
const {execFile} = require('child_process')
const { ipcRenderer } = require('electron')
const fs = require('fs')
function startRecording() {
    if(recorder){
        alert('already record running')
    }else{
        const fname = document.getElementById('fname').value
        if(!fname || fname[fname.length-1].match(/\W/))return alert('Fileaname is empty or \nends with a special character')
        recorder = execFile('ffmpeg',['-f','gdigrab','-framerate','30','-i','desktop',`${fname}.mkv`])
        document.getElementById('start').disabled=false
        document.getElementById('stop').disabled=false
        ele.style.display = 'block'
        head.style.display = 'none'
        startTimer()
    }
}

function stopRecording() {
    if(recorder){
        recorder.kill('SIGINT')
        document.getElementById('start').disabled=true
        document.getElementById('stop').disabled=true
        recorder = null
        //ele.style.display = 'none'
        ele.style.fontSize = 'x-small'
        ele.innerHTML = `Please wait while we are saving your recording this will last 15 seconds window will close automatically
        <div style="border: 5px solid #f3f3f3;border-radius: 50%;border-top: 5px solid #3498db;width: 10px;height: 10px;-webkit-animation: spin 1s linear infinite;"></div>`
        //head.style.display = 'flex'
        stopTimer()
        ipcRenderer.send('save-close')
    }else{
        alert('No Recording running')
    }
}

function startTimer(){
    interval = setInterval(timer, 1000)
}

function timer(){
    if(s===59)
        m++ 
    s = (s+1)%60
    ele.innerHTML = `${m}:${s}`
}

function stopTimer() {
    s=0
    m=0
    clearInterval(interval)
}