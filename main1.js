//homework project 103
//https://teachablemachine.withgoogle.com/models/MLVyEnk1J/

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rq-FJ3SZ0/model.json', model_loaded);
function model_loaded(){
    console.log("Model has been loaded!")
}
function check(){
  img =  document.getElementById('caprured_image');
  classifier.classify(img, gotResult);  
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log("Arman") 
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
