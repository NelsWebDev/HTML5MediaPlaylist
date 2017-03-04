class MediaPlaylist{
            constructor(config){
                        if(config.currentClass === undefined) config.currentClass = "current";
                        if(config.playerId === undefined) config.playerId = "player";
                        if(config.playlistId === undefined) config.playlistId = "playlist";

                        var glob = this;
                        this.player = document.getElementById(config.playerId);
                        this.player.togglePlayback = function (){
                            if(player.paused)
                                player.play();
                            else
                                player.pause();
                        }
                        this.linkList = document.querySelectorAll("#"+config.playlistId+" ul li a");
                        var nextItem;
                        this.player.src = this.linkList[0].href;
                        this.linkList[0].classList.add(config.currentClass);
                        this.linkList.forEach(function(el, i){
                           el.addEventListener("click", function(e){
                               e.preventDefault();
                               document.getElementsByClassName(config.currentClass)[0].classList.remove(config.currentClass);
                               glob.player.src = this.href;
                               this.classList.add(config.currentClass);
                               if(glob.player.paused) glob.player.play();

                           });
                        });
                        this.player.addEventListener("ended", function(){
                            nextItem = document.querySelector("." + config.currentClass).parentElement.nextElementSibling.querySelector("a");
                            glob.player.src = nextItem.href;
                            document.querySelector("." + config.currentClass).classList.remove(config.currentClass);
                            nextItem.classList.add(config.currentClass);
                            if(glob.player.paused) glob.player.play();
                        });
            }
            
        }