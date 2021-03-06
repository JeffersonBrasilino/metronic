import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, AfterViewInit {
	@ViewChild('asm', {static: true}) asideMenu: ElementRef;
	currentRouteUrl: string = '';
	insideTm: any;
	outsideTm: any;
	menuInstance: any;
	menu = [
		{
			text: 'Gerencial',
			submenu: [
				{text: 'Usuários', link: '/gerencial/usuario/list'},
			]
		},
		{
			text: 'Login', link: '/user/list'
		}
	];

	constructor(private render: Renderer2, private _route: ActivatedRoute, private router: Router) {
	}

	ngOnInit() {
		this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
		this._route.data.subscribe((res)=>{
			console.log(res);
		})
	}

	ngAfterViewInit() {
		this.menuInstance = new KTMenu(this.asideMenu.nativeElement, {
			submenu: {
				desktop: 'accordion',
				tablet: 'accordion',
				mobile: 'accordion'
			},
			accordion: {
				slideSpeed: 200, // accordion toggle slide speed in milliseconds
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});
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

	activeMenu(item) {
		const el = this.render.parentNode(item.currentTarget);
		this.menuInstance.setActiveItem(el);
	}
}
