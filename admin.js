speak()

function speak() {
    var synth = window.speechSynthesis;
    speakdata = "Welcome Mathieu Plassard";
    var otherthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(otherthis);
    console.log("spoke")
}