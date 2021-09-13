Webcam.set({
    width:360,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#camera");
camera=document.getElementById("camera");


function TakeSnapShot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="Web" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aUFi7RvVy/model.json',modelLoaded);
function modelLoaded() {
    console.log('modelLoaded!');
}
function check() {
    image=document.getElementById("Web");
    classifier.classify(image,gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}