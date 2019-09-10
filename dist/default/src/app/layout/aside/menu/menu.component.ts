import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {MenuOptions} from "../../layout-partials/index";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, AfterViewInit {
	@ViewChild('asideMenu', {static: false}) asideMenu: ElementRef;

	currentRouteUrl: string = '';
	insideTm: any;
	outsideTm: any;
	menuOptions: MenuOptions = {
		// vertical scroll
		scroll: false,

		// submenu setup
		submenu: {
			desktop: {
				// by default the menu mode set to accordion in desktop mode
				default: 'dropdown',
				state: {
					body: 'kt-aside--minimize',
					mode: 'dropdown'
				}
			},
			tablet: 'accordion', // menu set to accordion in tablet mode
			mobile: 'accordion' // menu set to accordion in mobile mode
		},

		// accordion setup
		accordion: {
			expandAll: false // allow having multiple expanded accordions in the menu
		}
	};
	menu = [
		{
			text: "Usuários",
			submenu: [
				{text: 'Cadastrar', link: "/user/form"},
				{text: 'Listar', link: "/user/list"}
			]
		},
		{
			text:'Login', link:'/auth/signin'
		},
		{
			text:'Login', link:'/auth/signin'
		},
		{
			text:'Login', link:'/auth/signin'
		},
		{
			text:'Login', link:'/auth/signin'
		},
		{
			text: "Usuários",
			submenu: [
				{text: 'Cadastrar', link: "/user/form"},
				{text: 'Listar', link: "/user/list"}
			]
		},
		{
			text: "Usuários",
			submenu: [
				{text: 'Cadastrar', link: "/user/form"},
				{text: 'Listar', link: "/user/list"}
			]
		},
		{
			text: "Usuários",
			submenu: [
				{text: 'Cadastrar', link: "/user/form"},
				{text: 'Listar', link: "/user/list"}
			]
		},
		{
			text: "Usuários",
			submenu: [
				{text: 'Cadastrar', link: "/user/form"},
				{text: 'Listar', link: "/user/list"}
			]
		},
	];

	constructor(private render: Renderer2, private _route: ActivatedRoute, private router: Router) {
	}

	ngOnInit() {

		this.currentRouteUrl = this.router.url.split(/[?#]/)[0];

		console.log(this.menu);
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(event => this.currentRouteUrl = this.router.url.split(/[?#]/)[0]);

		/*if (objectPath.get(config, 'aside.menu.dropdown') !== true && objectPath.get(config, 'aside.self.fixed')) {
			this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-scroll', '1');
		}

		if (objectPath.get(config, 'aside.menu.dropdown')) {
			this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown', '1');
			// tslint:disable-next-line:max-line-length
			this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown-timeout', objectPath.get(config, 'aside.menu.submenu.dropdown.hover-timeout'));
		}*/
	}

	ngAfterViewInit() {
	}

	/**
	 * Use for fixed left aside menu, to show menu on mouseenter event.
	 * @param e Event
	 */
	mouseEnter(e: Event) {
		// check if the left aside menu is fixed
		if (document.body.classList.contains('kt-aside--fixed')) {
			if (this.outsideTm) {
				clearTimeout(this.outsideTm);
				this.outsideTm = null;
			}

			this.insideTm = setTimeout(() => {
				// if the left aside menu is minimized
				if (document.body.classList.contains('kt-aside--minimize') && KTUtil.isInResponsiveRange('desktop')) {
					// show the left aside menu
					this.render.removeClass(document.body, 'kt-aside--minimize');
					this.render.addClass(document.body, 'kt-aside--minimize-hover');
				}
			}, 50);
		}
	}

	/**
	 * Use for fixed left aside menu, to show menu on mouseenter event.
	 * @param e Event
	 */
	mouseLeave(e: Event) {
		if (document.body.classList.contains('kt-aside--fixed')) {
			if (this.insideTm) {
				clearTimeout(this.insideTm);
				this.insideTm = null;
			}

			this.outsideTm = setTimeout(() => {
				// if the left aside menu is expand
				if (document.body.classList.contains('kt-aside--minimize-hover') && KTUtil.isInResponsiveRange('desktop')) {
					// hide back the left aside menu
					this.render.removeClass(document.body, 'kt-aside--minimize-hover');
					this.render.addClass(document.body, 'kt-aside--minimize');
				}
			}, 100);
		}
	}
}
