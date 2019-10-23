$(document).ready(function() {
    $.fn.editable.defaults.mode = 'popup';

    //make username editable
    $('#btc-amount').editable();

    //make status editable
    $('#val').editable({
        type: 'select',
        title: 'Выбор валюты для покупки',
        placement: 'right',
        value: 1,
        source: [
                { value: 1, text: 'Яндекс.Деньги' },
                { value: 2, text: 'QIWI' }
            ]
            /*
            //uncomment these lines to send data on server
            ,pk: 1
            ,url: '/post'
            */
    });
});