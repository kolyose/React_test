class AdminPanel extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (            
            <form>
                <fieldset>
                    <legend>Puzzle game settings</legend>
                    <label> 
                        Image to play with: <br/>
                            <input type="file" name="file" accept="image/*" required/>
                    </label> <br/><br/>
                    <div>
                        Game area dimensions: <br/>
                          <input type="number" name="width" placeholder="Width" min="1000" max="2000" required/>
                          <span> x </span>
                          <input type="number" name="height" placeholder="Height" min="1000" max="2000" required/>
                    </div> <br/><br/>
                    <label> 
                        Time limit in seconds: <br/>
                            <input type="number" name="time" min="1" required/>
                    </label> <br/><br/>
                    <div>
                        Fragments number: <br/>
                        <select name="fragments">
                            {this.props.fragmentsOptions.map(fragments => 
                                <option 
                                    key={fragments} 
                                    value={fragments}>
                                    {fragments}
                                </option>
                            )}
                        </select>
                    </div> <br/><br/>
                    <input type="submit" value="Submit"></input>
                </fieldset>                
            </form>
        );
    }
}

ReactDOM.render(
    <AdminPanel fragmentsOptions={[12, 20, 30]}/>,
    document.getElementById('content')
);