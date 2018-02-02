/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
makeHttpCall('/data',
  data => {
    for (item of data) {
      makeHttpCall(`/data/${item.getId()}/info`,
        dataInfo => {
          makeHttpCall(`/data/images/${dataInfo.img}`,
            showImage,
            error => {  //#A
              console.log(`Error image: ${error.message}`);
            });
        },
        error => { //#B
          console.log(`Error each data item: ${error.message}`);
        });
    }},
    error => {  //#C
      console.log(`Error fetching data: ${error.message}`);
    }
  );
