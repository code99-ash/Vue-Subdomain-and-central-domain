class DragNDrop {
    static allDrop(e) {
        e.preventDefault();
    }

    static drag(e) {
        e.dataTransfer.setData("text", e.target.id)
    }

    static drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    }
}

export default DragNDrop;