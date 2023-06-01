import { render,screen } from '@testing-library/react';
import Button from './Button';



describe('kkk',()=>{

    

    it("lll",()=>{
        render(<Button>Ohayou</Button>)
        const btn = screen.getByText('Ohayou');
        expect(btn).toBeInTheDocument();
/*
        const { getByText }  = render(<Button>Ohayou</Button>);

        expect(getByText("Ohayou")).toBeInTheDocument();*/
    });

    it("lal",()=>{
        render(<Button ghost>Ohayou</Button>);
        const btn = screen.getByText('Ohayou');
        

        
        expect(btn.getAttribute('class')).toMatch(/ghost/i);
    });
    it("laol",()=>{
        render(<Button>Ohayou</Button>);
        const btn = screen.getByText('Ohayou');
        expect(btn.getAttribute('class')).not.toMatch(/ghost/i);
    });
    
});