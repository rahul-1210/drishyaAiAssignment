//Over Sampling Problem
// There is a list of image records

images = [
    {'name': 'img1.jpg', 'class': 'class 01'},
    {'name': 'img2.jpg', 'class': 'class 02'},
    {'name': 'img21.jpg', 'class': 'class 02'},
    {'name': 'img3.jpg', 'class':  'class 01'},
    {'name': 'img4.jpg', 'class':  'class 01'},
    {'name': 'img5.jpg', 'class': 'class 01'},
    {'name': 'img6.jpg', 'class': 'class 01'},
    {'name':'img7.jpg','class':'class 03'}
]

// And there is second input - a number
let a=5; // this is the second input;
// oversample_balance = 5

// The name is unique for each record
// If the class group is less than oversample_balance, over sample the image records to oversample_balance

// for example,
// The above set contains two classes: class01 and class02
// And class02 is a minority class because the number of records with class02 < oversample_balance
// The target is to add three more records of class02 so to match the oversample_balance

// We randomly pick the class02 records, and create duplicate records. We will add a postfix string 
// for each oversampled record's name. The out put may be one of the below two sorted

// over_sampled_images = [
//     {'name': 'img1.jpg', 'class': 'class 01'},
//     {'name': 'img2.jpg', 'class': 'class 02'},
//     {'name': 'img21.jpg', 'class': 'class 02'},
//     {'name': 'img3.jpg', 'class': 'class 01'},
//     {'name': 'img4.jpg', 'class': 'class 01'},
//     {'name': 'img5.jpg', 'class': 'class 01'},
//     {'name': 'img6.jpg', 'class': 'class 01'},
    
//     {'name': 'img2_oversample_1.jpg', 'class': 'class 02'},
//     {'name': 'img21_oversample_1.jpg', 'class': 'class 02'},
//     {'name': 'img21_oversample_2.jpg', 'class': 'class 02'},
// ]


// or

// over_sampled_images = [
//     {'name': 'img1.jpg', 'class': 'class 01'},
//     {'name': 'img2.jpg', 'class': 'class 02'},
//     {'name': 'img21.jpg', 'class': 'class 02'},
//     {'name': 'img3.jpg', 'class': 'class 01'},
//     {'name': 'img4.jpg', 'class': 'class 01'},
//     {'name': 'img5.jpg', 'class': 'class 01'},
//     {'name': 'img6.jpg', 'class': 'class 01'},
    
//     {'name': 'img2_oversample_1.jpg', 'class': 'class 02'},
//     {'name': 'img2_oversample_2.jpg', 'class': 'class 02'},
//     {'name': 'img21_oversample_1.jpg', 'class': 'class 02'},
// ]


// program for overSampling 

function overSampling(images,a){
    let count={};
    images.map(image=>{
        count[image.class]=count[image.class]?count[image.class]+1:1;
    })
    
    for (const [key, value] of Object.entries(count)) {
        if(value<a){
            for(var i=1;i<=a-value;i++){
             images.push({'name': `img${key}${i}` ,'class':key})
            }
        }
      }
    
      console.log(images);
}

  
overSampling(images,a);



