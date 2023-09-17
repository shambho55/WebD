import React,{useState} from "react";
import Title from "./components/Title";

function App() {
  const [name,setName] = useState("Your Name");
  const [date,setDate] = useState("DOB");
  
  return (
    <div className="container-fluid">
      <h1 className="text-center">Starter App</h1>
      <Title Text={date} />
      <Title Text={name} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque. Nibh sit amet commodo nulla facilisi nullam vehicula. Ante in nibh mauris cursus mattis molestie a iaculis at. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Vel orci porta non pulvinar neque laoreet. Sit amet risus nullam eget felis eget nunc lobortis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Magna sit amet purus gravida quis.

        Volutpat consequat mauris nunc congue nisi vitae. Non odio euismod lacinia at quis risus sed vulputate. Placerat vestibulum lectus mauris ultrices eros. Integer eget aliquet nibh praesent tristique magna sit amet purus. Eleifend mi in nulla posuere sollicitudin. Sed risus ultricies tristique nulla aliquet enim. Magna fermentum iaculis eu non diam. Nec ultrices dui sapien eget mi proin sed libero enim. Tellus mauris a diam maecenas sed enim ut sem. Aliquet nec ullamcorper sit amet risus nullam eget felis. Commodo quis imperdiet massa tincidunt. Facilisi cras fermentum odio eu. Massa tincidunt dui ut ornare lectus sit amet est placerat. Dui ut ornare lectus sit amet est placerat in.

        Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Sit amet purus gravida quis blandit turpis cursus in. Pellentesque sit amet porttitor eget dolor. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Etiam tempor orci eu lobortis elementum. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Maecenas pharetra convallis posuere morbi. Est placerat in egestas erat imperdiet sed euismod nisi. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Sagittis purus sit amet volutpat. Commodo sed egestas egestas fringilla phasellus faucibus. Facilisis magna etiam tempor orci eu lobortis.

        Sit amet massa vitae tortor condimentum lacinia quis. Imperdiet sed euismod nisi porta lorem mollis. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Ac feugiat sed lectus vestibulum. Nibh tortor id aliquet lectus proin nibh nisl. Et netus et malesuada fames ac turpis egestas maecenas. Augue lacus viverra vitae congue eu consequat ac. Id faucibus nisl tincidunt eget nullam. Ultrices sagittis orci a scelerisque purus. Pharetra vel turpis nunc eget lorem dolor. Non consectetur a erat nam at lectus urna duis.

        Neque ornare aenean euismod elementum. Consequat mauris nunc congue nisi vitae. Non diam phasellus vestibulum lorem sed risus. Volutpat diam ut venenatis tellus. Vestibulum morbi blandit cursus risus at ultrices mi. Consectetur lorem donec massa sapien faucibus et molestie. Urna nec tincidunt praesent semper feugiat nibh. Praesent tristique magna sit amet purus. Nisl condimentum id venenatis a. Gravida quis blandit turpis cursus. Gravida arcu ac tortor dignissim convallis. Faucibus ornare suspendisse sed nisi. Non blandit massa enim nec dui. Amet volutpat consequat mauris nunc congue. Leo integer malesuada nunc vel. Diam ut venenatis tellus in metus vulputate. Vulputate odio ut enim blandit volutpat. Sit amet cursus sit amet. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.
      </p>
      <div className="d-flex input-boxes">
        <input type="date" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" value={date} onChange={(e)=>{setDate(e.target.value)}} />
      </div>
    </div>
  );
}

export default App;
