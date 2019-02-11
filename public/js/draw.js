var shapes = []
var selection;
var color = "";
// simulate mouse event to color picker
function triggerMouseEvent(node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
}
//$(this).css( 'cursor', 'url(cursor.png), auto' );
var elems = document.getElementById('geometry-select');
var dropdown = M.Dropdown.init(elems, {
    coverTrigger: true,
    container: document.getElementById("dropdown-container"),
    onOpenStart: function () {
        $("#geometry").hide();
    },
    onOpenEnd: function () {

        console.log("click");
        $("#geometry").css("width", "64px");
        $("#geometry").css("left", "10px");
        $("#geometry").show();

    }
});
var elems_zoom = document.getElementById('zoom-select');
var dropdown_zoom = M.Dropdown.init(elems_zoom, {
    coverTrigger: true,
    container: document.getElementById("zoom-container"),
    onOpenStart: function () {
        $("#zoom").hide();
    },
    onOpenEnd: function () {
        console.log("click");
        $("#zoom").css("width", "64px");
        $("#zoom").css("left", "10px");
        $("#zoom").show();


    }
});
document.getElementById('geometry-select').addEventListener('click', function () {
    dropdown.open();
})
document.getElementById('zoom-select').addEventListener('click', function () {
    dropdown_zoom.open();
})
var elems = document.getElementById('panel-draw');
var instances = M.Sidenav.init(elems, { edge: "left", draggable: true });
//instances.close();

$("#picker").click(function (e) {



    triggerMouseEvent(document.getElementById('color-picker-input'), "mousedown");
});

var color_picker = document.getElementById("color-picker-input");
var picker = new CP(color_picker);

function on_start() {
    console.log('start');
}

function on_drag(v, instance) {
    //instance.target.value = '#' + v;
    color = "#" + v;
    if (selection != null) {
        selection.set('fill', color);
        canvas.renderAll();
    }
    $("#color-picker-value").css("backgroundColor", '#' + v);
    console.log('drag');
}

function on_stop() {
    console.log('stop');
}

function on_enter() {

    console.log('enter');
}

function on_exit() {
    console.log('exit');
}

function on_fit() {
    var t = $("#picker").offset().top;
    var l = $("#picker").offset().left + 100;
    $(".color-picker").css("top", t + "px")
    $(".color-picker").css("left", l + "px")
    console.log('fit');
}

function on_create(v, instance) {
    console.log('create');
    color = "#" + v;
    on_drag(v, instance); // trigger drag event on initiation ...
}

picker.on("start", on_start);
picker.on("drag", on_drag);
picker.on("stop", on_stop);
picker.on("enter", on_enter);
picker.on("exit", on_exit);
picker.on("fit", on_fit);
picker.on("create", on_create);

//event 
function ConfigCanvas(object, property) {

    object[property] = true;
    canvas.renderAll();

}
function ConfigCanvas_2(object, property, value) {

    object[property] = value;
    canvas.renderAll();

}
function fullcontrol(object, property, value) {

    object[property](value, true);
    canvas.renderAll();

}

function defaultproperty(object) {
    ConfigCanvas(object, 'hasControls');
    ConfigCanvas(object, 'hasBorders');
    ConfigCanvas(object, 'hasRotatingPoint');
    ConfigCanvas(object, 'visible');
    ConfigCanvas(object, 'selectable');
    ConfigCanvas(object, 'evented');
    ConfigCanvas(object, 'transparentCorners');
    ConfigCanvas(object, 'centeredScaling');
    ConfigCanvas(object, 'centeredRotation');
    ConfigCanvas(object, 'centeredRotation');
    ConfigCanvas_2(object, 'cornerStyle', 'circle');
    fullcontrol(object, 'setControlVisible', 'tl');
    fullcontrol(object, 'setControlVisible', 'tr');
    fullcontrol(object, 'setControlVisible', 'bl');
    fullcontrol(object, 'setControlVisible', 'br');
}
function activateControl() {
    canvas.isDrawingMode = false;
}
function activateDrawing() {
    canvas.isDrawingMode = true;
}
function erase() {
    canvas.remove(selection);
    canvas.renderAll();
    canvas_2.remove(selection);
};
function clearAll() {
    canvas.clear();
    canvas.set("backgroundColor","#ffffff");
    canvas.set("selectionColor", 'blue');
    canvas.set("selectionLineWidth", "2");
    canvas.renderAll();
};
function createCircle() {
    var circle = new fabric.Circle({
        radius: 20, fill: color, left: 100, top: 100
    });
    circle.toObject = (function (toObject) {
        return function () {
            return fabric.util.object.extend(toObject.call(this), {
                name: this.name
            });
        };
    })(circle.toObject);
    circle.name = chance.string({ length: 10 });
    circle.on('selected', function () {
        selection = circle;
    });
    circle.on('deselected', function () {
        console.log('diselected');
        selection = null;

    });
    
    shapes.push(circle);
    canvas.add(circle); // add object
    defaultproperty(circle);
    canvas.renderAll();
}
function createRect() {

    console.log("create")
    var rect = new fabric.Rect({
        left: 150,
        top: 200,
        originX: 'left',
        originY: 'top',
        width: 150,
        height: 120,
        fill: color
    });
    rect.toObject = (function (toObject) {
        return function () {
            return fabric.util.object.extend(toObject.call(this), {
                name: this.name
            });
        };
    })(rect.toObject);
    rect.name = chance.string({ length: 10 });
    rect.on('selected', function () {
        selection = rect;
    });
    rect.on('deselected', function () {
        console.log('diselected');
        selection = null;

    });
    shapes.push(rect);
    canvas.add(rect); // add object
    defaultproperty(rect);
    canvas.renderAll();
}
function createTriangle() {
    var triangle = new fabric.Triangle({
        width: 20, height: 30, fill: color, left: 50, top: 50
    });
    triangle.toObject = (function (toObject) {
        return function () {
            return fabric.util.object.extend(toObject.call(this), {
                name: this.name
            });
        };
    })(triangle.toObject);
    triangle.name = chance.string({ length: 10 });
    triangle.on('selected', function () {
        selection = triangle;
    });
    triangle.on('deselected', function () {
        
        selection = null;

    });
    shapes.push(triangle);
    canvas.add(triangle); // add object
    defaultproperty(triangle);
    canvas.renderAll();
}
function DrawText() {
    var text = new fabric.Textbox('Write your Text', {
        left: 100,
        top: 150,
        fill: color,
        fontSize: 20
    });
    text.on('selected', function () {
        selection = text;
    });
    text.on('deselected', function () {
    
        selection = null;

    });
    shapes.push(text);
    canvas.add(text); // add object
    //defaultproperty(text);
    canvas.renderAll();
    text.set("selectable","false");
    canvas_2.add(text);
}
// reference canvas element
canvas = this.__canvas = new fabric.Canvas('draw-container', {
    isDrawingMode: true,
    backgroundColor: '#fff',
    selectionColor: 'blue',
    selectionLineWidth: 2
});
fabric.Object.prototype.transparentCorners = false;


function observe(eventName) {

    canvas.on(eventName, function (opt) { 

        connection.send({ opt: canvas.toDatalessJSON(), draw: "true" }) 
    });
}

function observeObj(eventName) {

    canvas.getObjects().forEach(function (o) {
        o.on(eventName, function (opt) {
         
            connection.send({ opt: canvas.toDatalessJSON(), draw: "true" })
        });
    });
}

observe('object:modified');
observe('object:moving');
observe('object:scaling');
observe('object:rotating');
observe('object:moved');
observe('object:scaled');
observe('object:rotated');
observe('object:added');
observe('object:removed');
observe('path:created');
observe('after:render');


observe('selection:cleared');
observe('selection:created');
observe('selection:updated');


observeObj('moving');
observeObj('scaling');
observeObj('rotating');
observeObj('skewing');
observeObj('moved');
observeObj('scaled');
observeObj('rotated');
observeObj('skewed');












