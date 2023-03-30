
import React from "react";


const App = () => {

    const TotalStyles: any = {
        NameBarStyle: {
            borderBottem: 'solid',
            padding: '10px 10px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: 'black',
        },
        NameBarStyleh1: {
            fontSize: '32px',
            color: 'black',
            marginRight: '50px'
        },
        NameBarStyleh3: {
            fontSize: '16px',
            color: 'black',
            marginRight: '50px'
        },
        CommenHeaderStyle: {
            fontSize: '32px',
            marginLeft: '10px',
            fontWeight: '600',
            color: 'drakblue',
            textDecoration: 'underline',
            marginBottom: '15px'
        },
        CommenPTagStyle: {
            fontSize: '16px',
            marginLeft: '20px',
            color: '#90847F',
            marginBottom: '8px'

        },
        CommenH3TagStyle: {
            fontSize: '18px',

            marginLeft: '20px',
            color: '#221D1D',
            marginBottom: '8px',
        },
        CommenH2TagStyle: {
            fontSize: '20px',
            marginLeft: '20px',
            color: 'black',
            marginTop: '12px',
            fontWeight: '600',
        },
        ListShowColum: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'space-between',
            marginLeft: '20px',
            listStyle: 'number'
        },
        ListShowRow: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'space-evenly',
            marginLeft: '20px',
            listStyle: 'number'
        },
        aboutListColumn: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'start',
            justifyContent: 'space-evenly',
            marginLeft: '20px',
            listStyle: 'number'
        }
    }

    return <section className=" flex flex-col [&>*]:mb-10 border border-black p-20 ">
        {/* head */}
        <div style={TotalStyles.NameBarStyle} >
            <h1 style={TotalStyles.NameBarStyleh1} > Sakthi . R</h1>
            <div>
                <h3 style={TotalStyles.NameBarStyleh3} >Gmail: Sakthi@vishgyna.com</h3>
                <h3 style={TotalStyles.NameBarStyleh3}>Phone: 9123456789</h3>
                <h3 style={TotalStyles.NameBarStyleh3}>GitHub : <a href="">https//git....</a></h3>
            </div>
        </div>

        {/* object */}

        <div>
            <h1 style={TotalStyles.CommenHeaderStyle} >Objectives</h1>
            <p style={TotalStyles.CommenPTagStyle}>Fugiat occaecat ipsum non ullamco mollit eu esse nostrud incididunt anim. Enim id excepteur elit occaecat enim sunt amet proident sunt. Fugiat sit eiusmod incididunt cillum tempor.
                Labore veniam sit aliqua amet mollit. Cillum eu quis pariatur aute fugiat sunt eu amet ad elit. Tempor id voluptate aliqua consequat veniam commodo irure ullamco ea sunt. Irure sit est velit aliquip excepteur occaecat labore Lorem. Laborum dolor esse ex amet et qui sit.
                Proident fugiat qui incididunt laboris ea cillum sunt commodo et. Nisi mollit officia ipsum magna. Magna nisi consequat nisi Lorem quis do exercitation. Magna qui proident excepteur ut enim ad. Laboris et adipisicing velit ea cupidatat ipsum.
                Ipsum duis minim in do sit deserunt magna sunt voluptate excepteur ipsum id pariatur. Laborum labore esse non consequat voluptate commodo voluptate ipsum qui et elit ipsum eu dolor. Consequat excepteur occaecat est exercitation ea.</p>
        </div>
        

        {/* experience */}

        <div>
            <h1 style={TotalStyles.CommenHeaderStyle}>carrier</h1>

            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >visgana pvt let</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >1yr experience</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div>



            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >bishgyana pvt let</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >2yr experience</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div>

            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >dishgyana pvt let</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >1yr experience</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div>


        </div>

        {/* education */}


        <div>
            <h1 style={TotalStyles.CommenHeaderStyle} >Education</h1>
            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >10th Std</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >Percentage - 83%</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div>

            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >12th Std</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >Percentage - 83%</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div>

            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >College</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >Percentage - 83%</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div >
        </div >



       <div style={TotalStyles.ListShowColum}>
        {/* skills */}
       <div >
            <h1 style={TotalStyles.CommenHeaderStyle} >Skils</h1>
            <ul style={TotalStyles.ListRow}>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle}>Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle}>Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
            </ul>

        </div>

        {/* other Skils */}

        <div >
            <h1 style={TotalStyles.CommenHeaderStyle} >Other Skils</h1>
            <ul style={TotalStyles.ListRow}>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle}>Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle}>Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >Java</h2>
                    <h3 style={TotalStyles.CommenH3TagStyle} >intermidiate</h3>
                </li>
            </ul>

        </div>

        {/*  strengh */}
        <div >
            <h1 style={TotalStyles.CommenHeaderStyle} >Strength</h1>
            <ul style={TotalStyles.ListRow}>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >quick learner</h2>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >quick learner</h2>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >quick learner</h2>
                </li>
                <li>
                    <h2 style={TotalStyles.CommenH2TagStyle} >quick learner</h2>
                </li>
            </ul>
        </div>

       </div>


          {/* education */}


          <div>
            <h1 style={TotalStyles.CommenHeaderStyle} >Project</h1>
            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >Bank IO project</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >Worked - 83%</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div>

            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >Hotel Management</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >Worked - 83%</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div>

            <div>
                <h2 style={TotalStyles.CommenH2TagStyle} >IOT - Mini Project</h2>
                <h3 style={TotalStyles.CommenH3TagStyle} >Worked - 83%</h3>
                <p style={TotalStyles.CommenPTagStyle} >Veniam amet nostrud minim nostrud labore veniam. Irure aliqua incididunt et deserunt voluptate commodo magna commodo mollit fugiat nostrud. Et quis mollit occaecat sit esse aliquip adipisicing ea dolor amet. Sunt aute ea nulla reprehenderit cupidatat adipisicing. Sint exercitation consectetur ea non occaecat minim velit veniam ea voluptate veniam irure duis. Ea quis pariatur ipsum est cillum nisi irure. Nostrud est id incididunt est cupidatat cillum dolor dolore.</p>
            </div >
        </div >


        {/* bio */}

        <div>
            <h1 style={TotalStyles.CommenHeaderStyle}>Contact</h1>

            
               <div style={TotalStyles.ListShowRow}>
               <div style={TotalStyles.aboutListColumn}>
                    <h2 style={TotalStyles.CommenH2TagStyle} >Location : </h2>
                    <div>
                        <h3 style={TotalStyles.CommenH3TagStyle} >No 2 baran st, nimak, chennai</h3>
                        <h3 style={TotalStyles.CommenH3TagStyle} >6003004</h3>
                    </div>
                    </div>
    

                <div style={TotalStyles.aboutListColumn}>
                    <h2 style={TotalStyles.CommenH2TagStyle}>Contact : </h2>
                    <div>
                        <h3 style={TotalStyles.CommenH3TagStyle} >9876543210</h3>
                        <h3 style={TotalStyles.CommenH3TagStyle} >9876543210</h3>
                    </div>
                </div>


                <div style={TotalStyles.aboutListColumn}>
                    <h2 style={TotalStyles.CommenH2TagStyle}>@Mail  : </h2>
                    <div>
                        <h3 style={TotalStyles.CommenH3TagStyle} >sk@gmail.com</h3>
                        <h3 style={TotalStyles.CommenH3TagStyle} >sk@gmail.com</h3>
                    </div>
                </div>
               </div>
        </div>

        {/* declration */}

        <div>
            <h1 style={TotalStyles.CommenHeaderStyle} >Declration</h1>
           <div style={TotalStyles.ListShowColum}>
           <p style={TotalStyles.CommenPTagStyle} > I declare that all the facts given above are genuine to the best of my knowledge and belief. </p>
            <h2 style={TotalStyles.CommenH2TagStyle}>Signature </h2>
           </div>
            </div>

    </section>
}

export default App;