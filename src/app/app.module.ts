import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './res/view/header/header.component';
import { NewsPostComponent } from './first-page/res/view/news-post/news-post.component';
import {SidebarComponent } from './first-page/res/view/news-post/res/view/sidebar/sidebar.component';
import { NewBlogComponent } from './res/view/new-blog/new-blog.component';
import { PopularComponent } from './first-page/res/view/popular/popular.component';
import { UpcomingComponent } from './first-page/res/view/upcoming/upcoming.component';
import { SubscribeComponent } from './first-page/res/view/subscribe/subscribe.component';
import { FooterComponent } from './res/view/footer/footer.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { TrendsComponent } from './second-page/res/view/trends/trends.component';
import { ExploreComponent } from './second-page/res/view/explore/explore.component';
import { HumanizeComponent } from './second-page/res/view/humanize/humanize.component';
import { ProvideComponent } from './second-page/res/view/provide/provide.component';
import { ShowcaseComponent } from './second-page/res/view/showcase/showcase.component';
import { AnnounceComponent } from './second-page/res/view/announce/announce.component';
import { HighlightComponent } from './second-page/res/view/highlight/highlight.component';
import { ShowingComponent } from './second-page/res/view/showing/showing.component';
import { CommentComponent } from './second-page/res/view/comment/comment.component';
import { MailboxComponent } from './second-page/res/view/mailbox/mailbox.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { NewsComponent } from './third-page/res/view/third/res/view/news/news.component';
import { HomeComponent } from './third-page/res/view/third/res/view/home/home.component';
import { ThirdComponent } from './third-page/res/view/third/third.component';
import { ItemPopComponent } from './first-page/res/view/popular/res/view/item-pop/item-pop.component';
import { EventsComponent } from './first-page/res/view/upcoming/res/view/events/events.component';
import { ItemPostComponent } from './first-page/res/view/news-post/res/view/item-post/item-post.component';
import { ItemBlogComponent } from './res/view/new-blog/res/view/item-blog/item-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsPostComponent,
    SidebarComponent,
    NewBlogComponent,
    PopularComponent,
    UpcomingComponent,
    SubscribeComponent,
    FooterComponent,
    FirstPageComponent,
    SecondPageComponent,
    TrendsComponent,
    ExploreComponent,
    HumanizeComponent,
    ProvideComponent,
    ShowcaseComponent,
    AnnounceComponent,
    HighlightComponent,
    ShowingComponent,
    CommentComponent,
    MailboxComponent,
    ThirdPageComponent,
    NewsComponent,
    HomeComponent,
    ThirdComponent,
    ItemPopComponent,
    EventsComponent,
    ItemPostComponent,
    ItemBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
