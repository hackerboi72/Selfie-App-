var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start();
}
recognition.onresult = function run(event) { 
    console.log(event) 
    content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content;
    if (content == "Take my selfie.") {

    speak()
    }  
}

function speak() {
    var synth = window.speechSynthesis; 
    speak_data = "taking your selfie in 5 seconds"; 
    var utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);  
    Webcam.attach(camera);
    setTimeout(
        function delay(){ 
          takesnapshot(); 
          save();
     }, 5000);
}
Webcam.set({
    width: 800,
    height: 600,
    image_format: 'png', 
    png_quality: 1080  
}); 
camera = document.getElementById("camera");
function takesnapshot() {
    Webcam.snap(
        function (data_url) {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_url + '">"'
        }
    ) 
}
function save() {
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src 
    link.href = image 
    link.click()
}