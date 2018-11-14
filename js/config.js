/*window.onload = function() {
        var OPTIONS_VIDEO = {
            modeCapture: IcarSDK.MODE_CAPTURE.DOCUMENT,
            callBackFeedBackFunction: onFeedBackCallBack
        }
        IcarSDK.video.initialize(videoInput, OPTIONS_VIDEO);
        var OPTIONS_DOCUMENT = {
            width_document: 85.6,
            height_document: 53.98,
            marginPercent_frame: 0.1,
            MSG_PLACE_DOC_INSIDE: "COLOQUE SU IDENTIFICACIO \nDENTRO DEL RECUADRO"
        }
        IcarSDK.documentCapture.create(videoInput, null, onDocumentResultCallback, OPTIONS_DOCUMENT);
    }
    // Return function that the process will call when the process finishes     
function onDocumentResultCallback(answerResult, modeCapture, imageResult, roiPoints, hashCode) {
    if (answerResult == IcarSDK.ResultProcess.OK) {
        console.log("answerResult", answerResult)
        console.log("modeCapture", modeCapture)
        console.log("imageResult", imageResult)
        console.log("hashCode", hashCode)
        var canvasResult = document.getElementById("Imagen_result");
        canvasResult.className = videoInput.className;
        canvasResult.width = imageResult.width;
        canvasResult.height = imageResult.height;
        var context = canvasIn.getContext('2d');
        context.clearRect(0, 0, canvasResult.width, canvasResult.height);
        context.putImageData(imageResult, 0, 0);
    }
}
// FUNCTION: onFeedBackCallBack    
// Callback function to be called if there is any problem    
// executing the webSDK     
// params: - resultFeedBack: property where is indicated the result of      
//           the execution. The possible values are:     
function onFeedBackCallBack(resultFeedBack) {
    switch (resultFeedBack) {
        case IcarSDK.RESULT_VIDEO.OK:
            // Video correctly initialized    
            break;
        case IcarSDK.RESULT_VIDEO.NO_CAMERA_DEVICES:
            alert("Camera not detected!");
            break;
        case IcarSDK.RESULT_VIDEO.NO_CAMERA_PERMISSION:
            alert("Not permissions to use the camera!");
            break;
        case IcarSDK.RESULT_VIDEO.UNAVAILABLE_CAMERA:
            alert("Camera is using in other process!");
            break;
        case IcarSDK.RESULT_VIDEO.UNSUPPORTED_BROWSER:
            alert("The browser is not compatible!");
            break;
        case IcarSDK.RESULT_VIDEO.UNKNOWN_ERROR:
            alert("Camera is using in other process!");
            break;
    }
}*/