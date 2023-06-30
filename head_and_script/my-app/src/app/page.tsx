export default function Page() {
  return(
   <div>
        <h1>
          Hello, <a href="https://nextjs.org">Next.js!</a>
        </h1>    

		<script
		  dangerouslySetInnerHTML={{
		  __html: `alert("This is an inline JavaScript");`,
		  }}
		/> 
    </div> 

  ) 
}