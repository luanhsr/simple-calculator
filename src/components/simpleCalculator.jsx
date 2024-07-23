import style from './SimpleCalculator.module.css'
export function MianCalculate () {

    return (
        <div className={style.boxMain}>
            <div>
                <header className={style.header}>
                    <h1>Simple Calculator</h1>
                    <p>Calculate your simple interest Easily</p>
                </header>
                <main>
                <div className={style.displayCalc}>
                    <div>
                        <strong>₹ 10.000</strong>
                        <p>Simple Interest</p>
                    </div>
                </div>
                <div>
                    <form action="#" method="post">
                        <input type="text" name="Principal" id="Principal" placeholder="Principal amount" />
                        <input type="text" name="Rate" id="Rate" placeholder="Rate of interest (p.a)"/>
                        <input type="number" name="Time Period" id="Time" placeholder="3"/>
                    </form>
                    
                </div>
                </main>
            </div>
        </div>
    )

}