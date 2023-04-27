import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})

export class SideDrawer {
    @Prop({reflect: true}) title: string;
    @Prop({reflect: true, mutable: true}) open: boolean;

    onCloseDrawer() {
        this.open = false;
    }

    render() {
        // let content = null;
        // if(this.open) {
        //     content = (
        //         <aside>   
        //             <header><h1>{this.title}</h1></header>
        //             <main>
        //                 <slot />
        //             </main>
        //         </aside>
        //     )
        // }

        let mainContent = <slot />
        mainContent = (
            <div>
            <h2>Contact Information</h2>
            <p>You can reach us via phone or email.</p>
            <ul>
                <li>Phone: 555-555-5555</li>
                <li>
                    Email: {' '}
                    <a href="mailto:something@something.com">testemail@testemail.com</a>
                </li>
            </ul>
            </div>
        );
        
        
        return (
            <aside>   
                <header>
                    <h1>{this.title}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button class="active">Navigation</button>
                    <button>Contact</button>
                </section>
                <main>
                    <slot />
                </main>
            </aside>
        );
    }
}