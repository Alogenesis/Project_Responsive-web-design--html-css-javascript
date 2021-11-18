// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    console.log('get data');
    console.log(id, prop, value);
    console.log('----- start function -----');
    if (prop != 'tracks' && value !== ''){
      console.log('statement 1');
      records[id][prop] = value;
      console.log(records[id]);
      console.log(typeof(records[id][prop]));
    }
    else if (prop == 'tracks' && (records[id].hasOwnProperty("tracks") == false) ){
      console.log('statement 2');
      records[id]['tracks'] = [];
      records[id]['tracks'] += value;
      console.log(records[id]['tracks']);
      console.log(typeof(records[id]['tracks']))
    }
    else if (prop == 'tracks' && value !== ''){
      console.log('statement 3');
      console.log('add ' + records[id][prop] + value);
      records[id][prop] += value;
      console.log(typeof(records[id][prop]))
    }
    else if (value === ''){
      console.log('statement 4 Delete');
      console.log('delete' + records[id][prop]);
      delete records[id][prop];
    }
  
    else {
      console.log('state else');
    }
    console.log('--------------------------');
    console.log('Now update');
    console.log(records) ;
    console.log('------- End function ------');
  }
  
  console.log('Nunber 1');
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log('Nunber 2');
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  console.log('Nunber 3');
  updateRecords(recordCollection, 2548, "artist", "");
  console.log('Nunber 4');
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
  console.log('Nunber 5');
  updateRecords(recordCollection, 2468, "tracks", "Free");
  console.log('Nunber 6');
  updateRecords(recordCollection, 2548, "tracks", "");
  console.log('Number 7');
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide");