webcam.set({
    width:345,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

webcam.attach('#camera');

function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    });
}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https:teachablemachine.withgoogle.com/models/zjkoTTLqk/model.jason',modelLoaded)
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error,result) {
    if (error) {
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById('result_object_accuracy').innerHTML = result[0].confidence.tofixed(3);

    }}