import { Component } from "@angular/core";

@Component({
    selector: 'my-home',
    template: `
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="images/020_04.jpg" alt="Chania" width="460" height="345">
                    </div>

                     <div class="item">
                        <img src="images/020_04.jpg" alt="Chania" width="460" height="345">
                    </div>
    
                    <div class="item">
                        <img src="images/020_04.jpg" alt="Flower" width="460" height="345">
                    </div>

                    <div class="item">
                        <img src="images/020_04.jpg" alt="Flower" width="460" height="345">
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    `,
    styles: [`
        #myCarousel {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    `]
})
export class HomeComponent {

}