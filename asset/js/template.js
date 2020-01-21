var templateListe =
'<tr id="###articleId###">'+
    '<td class="text-center">###Date###</td>'+
    '<td class="text-center">###Titre###</td>'+
    '<td class="text-center linkTo test" onclick="displayArticle(\'###param###\')">Lire l\'article</td>'+
'</tr>';

var articleTemplate = 
'<div class="container article ###articleId###">'+
    '<div class="row">'+
        '<div class="col text-center mb-2">'+
            '<h1> ###Titre### </h1>'+
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="col">'+
            '<img src="###liensimage###">'+
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="col">'+
            '<h5><span class="badge badge-secondary">###Date###</span></h5>'+
        '</div>'+
    '</div>'+
        '<div class="row mt-2 font-weight-bold">'+
            '<div class="col">'+
            'Le resumer'+
            '</div>'+
        '</div>'+
        '<div class="row">'+
            '<div class="col mt-2">'+
                '###Resumer###'+
            '</div>'+
        '</div>'+
        '<div class="row mt-2 font-weight-bold">'+
            '<div class="col">'+
                'Notre Avis'+
            '</div>'+
        '</div>'+
        '<div class="row mt-2">'+
            '<div class="col">'+
                '###Comentaire###'+
            '</div>'+
        '</div>'+
        '<div class="row" mt-2>'+
            '<div class="col">'+
                '<a href=" ###source### ">La source</a> '+
            '</div>'+
        '</div>'+
        '<div class="row" mt-4>'+
            '<div class="col">'+
                '<div id="backlisting" class="linkTo" onclick="backlisting ()">Retour à la liste</div> '+
            '</div>'+
        '</div>'+
'</div>';
