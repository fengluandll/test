(function (Rx) {
    "use strict";

    var searchResults = [
        "RxJS",
        "RxJS in Action",
        "RxJS is Awesome"
    ];

    var $input = document.getElementById('search');
    var $searchResults = document.getElementById('searchResults');

    var searchStream = Rx.Observable.fromEvent($input, 'keyup')
        .map((e) => $input.value)
        .do(() => clearChildren($searchResults))
        .flatMap((text) => matchResult(text));

    var observer = Rx.Subscriber.create((results) => {
        appendListItem($searchResults, results);
    }, (ex) => {
        //This block executes only once, if there is an exception.
        clearChildren($searchResults);
        appendListItem($searchResults, ex.message);
    }, () => {
        //This block executes only once, if the Observable completed normally
        clearChildren($searchResults);
        appendListItem($searchResults, "No more searching");
    });

    searchStream.subscribe(observer);

    function matchResult(text) {
        return searchResults.filter((item) => {
            for (var i = 0; i < text.length; ++i) {
                if (text[i] !== item[i])
                    return false;
            }
            return true;
        });
    }

    function clearChildren($el) {
        while ($el.childElementCount > 0) {
            var firstChild = $el.firstChild;
            $el.removeChild(firstChild);
        }
    }

    function appendListItem($parent, text) {
        var li = document.createElement('li');
        var text = document.createTextNode(text);
        li.appendChild(text);
        $parent.appendChild(li);
    }
})(Rx);