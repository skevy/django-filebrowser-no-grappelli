function FileSubmit(FileURL, ThumbURL, FileType) {
    
    // var input_id=window.name.split("___").join(".");
    var input_id=parent.FileBrowser.filebrowser_field_input_id.replace(/____/g,'-').split("___").join(".");
    var preview_id = 'image_' + input_id;
    var link_id = 'link_' + input_id;
    var help_id = 'help_' + input_id;
    input = parent.document.getElementById(input_id);
    preview = parent.document.getElementById(preview_id);
    link = parent.document.getElementById(link_id);
    help = parent.document.getElementById(help_id);
    // set new value for input field
    input.value = FileURL;
    
    if (ThumbURL && FileType != "") {
        // selected file is an image and thumbnail is available:
        // display the preview-image (thumbnail)
        // link the preview-image to the original image
        link.setAttribute("href", FileURL);
        link.setAttribute("target", "_blank");
        preview.setAttribute("src", ThumbURL);
        help.setAttribute("style", "display:block");
    } else {
        // hide preview elements
        link.setAttribute("href", "");
        link.setAttribute("target", "");
        preview.setAttribute("src", "");
        help.setAttribute("style", "display:none");
    }
    parent.$.fancybox.close();
}

