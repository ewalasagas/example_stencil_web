import { Component, Prop, h, State, Method } from '@stencil/core';

@Component({
    tag: 'my-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})

export class SideDrawer {
    @State() showContactInfo = false;

    @Prop({reflect: true}) title: string;
    @Prop({reflect: true, mutable: true}) opened: boolean;

    onCloseDrawer() {
        this.opened = false;
    }

    onContentChange(content: string) {
        console.log(content);
        this.showContactInfo = content === 'contact'
    }

    @Method()
    open() {
        this.opened = true;
    }

    render() {
        // let content = null;
        // if(this.opened) {
        //     content = (
        //         <aside>   
        //             <header><h1>{this.title}</h1></header>
        //             <main>
        //                 <slot />
        //             </main>
        //         </aside>
        //     )
        // }
        let mainContent = <slot />;
        if(this.showContactInfo) {
            mainContent = (
                <div>
                <h2>Contact Information</h2>
                <p>You can reach us via phone or email.</p>
                <ul>
                    <li>Phone: 555-555-5555</li>
                    <li>Email: {' '}
                        <a href="mailto:something@something.com">testemail@testemail.com</a>
                    </li>
                </ul>
                </div>
            );
        }
        
        return [
            <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
            <aside>   
                <header>
                    <h1>{this.title}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button
                        class={!this.showContactInfo ? 'active' : ''}
                        onClick={this.onContentChange.bind(this, 'nav')}>
                        Navigation
                    </button>
                    <button 
                        class={!this.showContactInfo ? '' : 'active'}
                        onClick={this.onContentChange.bind(this, 'contact')}>
                        Contact
                    </button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        ];
    }
}