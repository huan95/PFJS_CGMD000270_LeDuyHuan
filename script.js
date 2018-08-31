var Information = function (title, content, day, view) {

    this.title = title;
    this.content = content;
    this.day = day;
    this.view = view;

    this.readNew = function () {
        alert("seen");
    };


};

var List = function () {

    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];

    this.append = function (element) {
        this.dataStore[this.listSize++] = element;
    };

    this.toString = function () {
        return this.dataStore
    };

    this.find = function (element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    };

    this.getElement = function () {
        return this.dataStore[this.pos];
    };

    this.insert = function () {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };

    this.remove = function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };
};

var new1 = new Information("Monney", "content 1", 9, 100);
var new2 = new Information("Love", "content 2", 10, 100);
var new3 = new Information("Iron man", "content 3", 15, 200);
var new4 = new Information("Spiderman", "content 4", 20, 200);
var new5 = new Information("Supperman", "content 5", 13, 200);

var listNew = new List();

listNew.append(new1);
listNew.append(new2);
listNew.append(new3);
listNew.append(new4);
listNew.append(new5);

var searchNew = function () {
    var searchNew = prompt("Input information");
    var indexNew = 0;
    for (var i = 1; i <= listNew.dataStore.length; i++) {
        if (listNew.toString()[i - 1].title === searchNew) {
            indexNew = i;
            break;
        }
    }

    if (indexNew > 0) {
        alert("Information is :" + searchNew);
    } else {
        alert("No information");
    }
};

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= listNew.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= listNew.dataStore.length - 1; ++inner) {
            if (listNew.dataStore[inner].day < listNew.dataStore[min].day) {
                min = inner;
            }
        }
        swap(listNew.dataStore, outer, min);
    }
}

selectionSort();
for (i = 0; i < listNew.listSize; i++) {
    document.write((i + 1) + "-" + "Display information :" + listNew.toString()[i].title + " - " + listNew.toString()[i].content +
        " - day: " + listNew.toString()[i].day + " - view : " + listNew.toString()[i].view + "<br>")

}

var postNew = function() {
    listNew.append(prompt("Post information"));
    document.write((i + 1) + "-" + "Display information :" + listNew.toString()[i].title);
};

var removeNew = function () {
    listNew.remove(new1);
    document.write("Remove : " + listNew.toString())

};

var use = new Information();

function postNew() {
    use.postNew();
}

function readNew() {
    use.readNew();

}

function removeNew() {
    use.removeNew();

}

function searchNew() {
    use.searchNew();

}





