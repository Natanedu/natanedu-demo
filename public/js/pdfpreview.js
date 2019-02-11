var __PDF_DOC,
    __CURRENT_PAGE,
    __TOTAL_PAGES,
    __PAGE_RENDERING_IN_PROGRESS = 0,
    __CANVAS = $('#canvas-container-pdf').get(0),
    __CANVAS_CTX = __CANVAS.getContext('2d');

function previewPDF(uid, filename) {
    var url = $("#" + uid).val();
    //download(url, filename, type_file);
    var f = progressHelper[uid]
    var reader = new FileReader();
    $("#pdfviewer").modal("open")
    reader.addEventListener("load", function () {
        var data = reader.result;
        // Normal url or an object url
        var pdfData = atob(data);
        PDFJS.getDocument({ data: pdfData }).then(function (pdf_doc) {
            // pdf_doc is a PDFDocumentProxy object
            console.log('PDF loaded');

            // Fetch the first page
            var pageNumber = 1;
            
        });
    });
}
function showPage(page_no) {
    __PAGE_RENDERING_IN_PROGRESS = 1;
    __CURRENT_PAGE = page_no;

    // Disable Prev & Next buttons while page is being loaded
    $("#pdf-next, #pdf-prev").attr('disabled', 'disabled');

    // While page is being rendered hide the canvas and show a loading message
    $("#canvas-container-pdf").hide();
    $("#page-loader").show();

    // Update current page in HTML
    $("#pdf-current-page").text(page_no);
    
    // Fetch the page
    __PDF_DOC.getPage(page_no).then(function(page) {
        // As the canvas is of a fixed width we need to set the scale of the viewport accordingly
        var scale_required = __CANVAS.width / page.getViewport(1).width;

        // Get viewport of the page at required scale
        var viewport = page.getViewport(scale_required);

        // Set canvas height
        __CANVAS.height = viewport.height;

        var renderContext = {
            canvasContext: __CANVAS_CTX,
            viewport: viewport
        };
        
        // Render the page contents in the canvas
        page.render(renderContext).then(function() {
            __PAGE_RENDERING_IN_PROGRESS = 0;

            // Re-enable Prev & Next buttons
            $("#pdf-next, #pdf-prev").removeAttr('disabled');

            // Show the canvas and hide the page loader
            $("#canvas-container-pdf").show();
            $("#page-loader").hide();
        });
    });
}
// Previous page of the PDF
$("#pdf-prev").on('click', function() {
    if(__CURRENT_PAGE != 1)
        showPage(--__CURRENT_PAGE);
});

// Next page of the PDF
$("#pdf-next").on('click', function() {
    if(__CURRENT_PAGE != __TOTAL_PAGES)
        showPage(++__CURRENT_PAGE);
});