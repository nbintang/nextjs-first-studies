import AboutPage from "@/app/about/page";
import { render, screen } from "@testing-library/react";

import '@testing-library/jest-dom';
import LayoutPage from "@/app/about/layout";

describe('About Page', () => { 
    it('should render', async () => {
        const page = render(
            <LayoutPage>
                <AboutPage/>
            </LayoutPage>
        );
        expect(page).toMatchSnapshot();
    });
});
