import { render,screen } from '@testing-library/react';
import Counter from './Counter';



describe('fff',()=>{



    it('sasasd',()=>{


        render(<Counter score={90} />)

        expect(screen.getByText("90")).toBeInTheDocument();
    });
    it('sasawdwsd',()=>{


        render(<Counter score={"90"} />)

        //expect(screen.getByText("90")).();
    });



});





