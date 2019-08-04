$(document).ready(function(){
    /* $('body').prepend(` <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a href="" class="navbar-brand">Start Bootstrap</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="" class="nav-link text-light">Home</a></li>
                <li class="nav-item"><a href="" class="nav-link">About</a></li>
                <li class="nav-item"><a href="" class="nav-link">Services</a></li>
                <li class="nav-item"><a href="" class="nav-link">Contact</a></li>
            </ul>.
        </div>
    </nav>
</header>
<main>
    <section>
        <div class="container mt-4 pt-5">
            <div class="row">
                <div class="col-12">
                    <div class="jumbotron">
                        <h1 class="display-3">A Warm Welcome!</h1>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
                            eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam
                            nobis illo aspernatur vitae fugiat numquam repellat.</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Call To Action!</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card h-100  text-center">
                        <img class="card-img-top" src="http://placehold.it/500x325" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
                                necessitatibus neque.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a href="#!" class="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card h-100 text-center">
                        <img class="card-img-top" src="http://placehold.it/500x325" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a href="#!" class="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card h-100  text-center">
                        <img class="card-img-top" src="http://placehold.it/500x325" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
                                necessitatibus neque.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a href="#!" class="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card h-100  text-center">
                        <img class="card-img-top" src="http://placehold.it/500x325" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto..
                            </p>
                        </div>
                        <div class="card-footer">
                            <a href="#!" class="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<footer class="py-5 bg-dark text-light mt-4">
    <div class="container"><p class="text-center">Copyright &copy Your Website 2019</p></div>
</footer>`) */
// header-nav
$('body').prepend('<header></header>');
$('header').append('<nav></nav>')
$('nav').addClass('navbar navbar-expand-lg navbar-dark bg-dark fixed-top');
const divCNav = $('<div>').addClass('container');
$('nav').append(divCNav);
const brand = $('<a>').addClass('navbar-brand').attr('href', '#').text('Start Bootstrap');
$(divCNav).append(brand);
const ul = $('<ul>').addClass('navbar-nav ml-auto');
$(divCNav).append(ul);
const li1 = $('<li>').addClass('nav-item');
$(ul).append(li1);
const li2 = $('<li>').addClass('nav-item');
$(ul).append(li2);
const li3 = $('<li>').addClass('nav-item');
$(ul).append(li3);
const li4 = $('<li>').addClass('nav-item');
$(ul).append(li4);
 const anav1 = $('<a>').addClass('nav-link text-light').attr('href', '#').text('Home');
 $(li1).append(anav1);
 const anav2 = $('<a>').addClass('nav-link').attr('href', '#').text('About');
 $(li2).append(anav2);
 const anav3 = $('<a>').addClass('nav-link').attr('href', '#').text('Services');
 $(li3).append(anav3);
 const anav4 = $('<a>').addClass('nav-link').attr('href', '#').text('Contact');
 $(li4).append(anav4);

//  main
// Jumbotron
$('body').append('<main></main>');
const sectionJumb = $('<section>');
$('main').append(sectionJumb);
const JumbCon = $('<div>').addClass('container mt-4 pt-5');
$(sectionJumb).append(JumbCon);
const rowJ = $('<div>').addClass('row');
$(JumbCon).append(rowJ);
const colJ = $('<div>').addClass('col-12');
$(rowJ).append(colJ);
const jumbotron = $('<div>').addClass('jumbotron');
$(colJ).append(jumbotron);
const h1 = $('<h1>').addClass('display-3').text('A Warm Welcome!');
$(jumbotron).append(h1);
const pj = $('<p>').addClass('lead').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat namnobis illo aspernatur vitae fugiat numquam repellat.');
$(jumbotron).append(pj);
const aj = $('<a>').addClass('btn btn-primary btn-lg').attr('href', '#').text('Call To Action!');
$(jumbotron).append(aj);

// Section Card
const sectionCard = $('<section>');
$('main').append(sectionCard);
const ccontainer = $('<div>').addClass('container');
$(sectionCard).append(ccontainer);
const cardRow = $('<div>').addClass('row');
$(ccontainer).append(cardRow);
const cardCol = $('<div>').addClass('col-3');
$(cardRow).append(cardCol);
const card = $('<div>').addClass('card h-100 text-center');
$(cardCol).append(card);
const img = $('<img>').addClass('card-img-top').attr('src', 'http://placehold.it/500x325');
$(card).append(img);
const cardBody = $('<div>').addClass('card-body');
$(card).append(cardBody);
const cardTitle = $('<h4>').addClass('card-title').text('Card title');
$(cardBody).append(cardTitle);
const cardText = $('<p>').addClass('card-text').text(' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente essenecessitatibus neque.');
$(cardBody).append(cardText);
const cardFooter = $('<div>').addClass('card-footer');
$(card).append(cardFooter);
const cardFooterLink = $('<a>').addClass('btn btn-primary').attr('href', '#').text('Find Out More!');
$(cardFooter).append(cardFooterLink);


// 
const cardCol2 = $('<div>').addClass('col-3');
$(cardRow).append(cardCol2);
const card2 = $('<div>').addClass('card h-100 text-center');
$(cardCol2).append(card2);
const img2 = $('<img>').addClass('card-img-top').attr('src', 'http://placehold.it/500x325');
$(card2).append(img2);
const cardBody2 = $('<div>').addClass('card-body');
$(card2).append(cardBody2);
const cardTitle2 = $('<h4>').addClass('card-title').text('Card title');
$(cardBody2).append(cardTitle2);
const cardText2 = $('<p>').addClass('card-text').text(' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.');
$(cardBody2).append(cardText2);
const cardFooter2 = $('<div>').addClass('card-footer');
$(card2).append(cardFooter2);
const cardFooterLink2 = $('<a>').addClass('btn btn-primary').attr('href', '#').text('Find Out More!');
$(cardFooter2).append(cardFooterLink2);
// 

const cardCol3 = $('<div>').addClass('col-3');
$(cardRow).append(cardCol3);
const card3 = $('<div>').addClass('card h-100 text-center');
$(cardCol3).append(card3);
const img3 = $('<img>').addClass('card-img-top').attr('src', 'http://placehold.it/500x325');
$(card3).append(img3);
const cardBody3 = $('<div>').addClass('card-body');
$(card3).append(cardBody3);
const cardTitle3 = $('<h4>').addClass('card-title').text('Card title');
$(cardBody3).append(cardTitle3);
const cardText3 = $('<p>').addClass('card-text').text(' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente essenecessitatibus neque.');
$(cardBody3).append(cardText3);
const cardFooter3 = $('<div>').addClass('card-footer');
$(card3).append(cardFooter3);
const cardFooterLink3 = $('<a>').addClass('btn btn-primary').attr('href', '#').text('Find Out More!');
$(cardFooter3).append(cardFooterLink3);

// 
const cardCol4 = $('<div>').addClass('col-3');
$(cardRow).append(cardCol4);
const card4 = $('<div>').addClass('card h-100 text-center');
$(cardCol4).append(card4);
const img4 = $('<img>').addClass('card-img-top').attr('src', 'http://placehold.it/500x325');
$(card4).append(img4);
const cardBody4 = $('<div>').addClass('card-body');
$(card4).append(cardBody4);
const cardTitle4 = $('<h4>').addClass('card-title').text('Card title');
$(cardBody4).append(cardTitle4);
const cardText4 = $('<p>').addClass('card-text').text(' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.');
$(cardBody4).append(cardText4);
const cardFooter4 = $('<div>').addClass('card-footer');
$(card4).append(cardFooter4);
const cardFooterLink4 = $('<a>').addClass('btn btn-primary').attr('href', '#').text('Find Out More!');
$(cardFooter4).append(cardFooterLink4);

// Footer
const footer = $('<footer>').addClass('py-5 bg-dark text-light mt-4');
$('body').append(footer);
const footerC = $('<div>').addClass('container');
$(footer).append(footerC);
const footerP = $('<p>').addClass('text-center').text('Copyright &copy Your Website 2019');
$(footerC).append(footerP);
  });