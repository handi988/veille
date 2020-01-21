

// recuperation des donnee 
    base('veille').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record, index) {
            // console.log('Retrieved', record.get('Date'));

            var articleId = 'article-' + index
        testId = record.id
             var test = [record.id]
             dateVeille = record.get('Date');
             titreVeille = record.get('Subject');
                imageArticle = record.get('image');
              resumeArticle = record.get('Synthesis');
              commentaireArticle = record.get('Comment');
              sourceArticle = record.get("link");
              console.log("source article",sourceArticle)

            // injecr les donner dans la liste
              var newlist = ""
            //   console.log('recprd', record.id)
              newlist = templateListe.replace("###articleId###", articleId)
              newlist = newlist.replace("###param###", articleId)
            newlist = newlist.replace("###Date###", dateVeille)
            newlist = newlist.replace("###Titre###", titreVeille)
            newlist = newlist.replace('###link###', sourceArticle)
          
            $('#articleList').prepend(newlist)

            // afficahge article 
                
            var detailArticle = ""
            detailArticle = articleTemplate.replace('###articleId###',articleId)
            detailArticle = detailArticle.replace('###liensimage###',imageArticle)
            detailArticle = detailArticle.replace('###Date###',dateVeille)
            detailArticle = detailArticle.replace('###Titre###',titreVeille)
            detailArticle = detailArticle.replace('###Resumer###',resumeArticle)
            detailArticle = detailArticle.replace('###Comentaire###',commentaireArticle)
            detailArticle = detailArticle.replace('###source###',sourceArticle)
                
            $('#articleDetail').append(detailArticle)
          
        })
             
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

    function displayArticle(articleId) {
        $('#mainScreen').hide()
        $('#screen2').show()
        $('.'+articleId).show()
    }
    function backlisting (){
        document.location.reload(true);
    }
    