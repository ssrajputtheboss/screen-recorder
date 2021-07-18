let recorder = null
const {spawn,execFile} = require('child_process')
const fs = require('fs')
function startRecording() {
    if(recorder){
        alert('already record running')
    }else{
        const fname = document.getElementById('fname').value
        if(!fname)return alert('Fileaname is empty')
        //document.getElementById('start').setAttribute('disabled',true)
        //document.getElementById('stop').setAttribute('disabled',false)
        //if(fs.existsSync('C:/Users/shash/Desktop/recordings'))
        //    fs.mkdirSync('C:/Users/shash/Desktop/recordings')
        recorder = execFile('ffmpeg',['-f','gdigrab','-framerate','30','-i','output.mkv'])
    }
}

function stopRecording() {
    if(recorder){
        recorder.kill('SIGINT')
        console.log(recorder.killed)
        //document.getElementById('start').setAttribute('disabled',false)
        //document.getElementById('stop').setAttribute('disabled',true)
        //recorder = null
    }else{
        alert('No Recording running')
    }
}