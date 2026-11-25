import Link from "next/link";
const groups=[
 {title:"PDF tools",description:"Organize, optimize and manage your PDF documents.",tools:[
  {name:"Merge PDF",desc:"Combine PDFs into one document.",href:"/merge-pdf",tag:"Popular",icon:"▤"},
  {name:"Split PDF",desc:"Separate every page into its own PDF.",href:"/split-pdf",tag:"Organize",icon:"✂"},
  {name:"Organize PDF",desc:"Reorder pages into the sequence you need.",href:"/organize-pdf",tag:"Organize",icon:"☷"},
  {name:"Remove PDF pages",desc:"Delete selected pages from a document.",href:"/remove-pages",tag:"Organize",icon:"−"},
  {name:"Extract PDF pages",desc:"Save selected pages as a new PDF.",href:"/extract-pages",tag:"Organize",icon:"⇧"},
  {name:"Rotate PDF",desc:"Turn pages 90°, 180° or 270°.",href:"/rotate-pdf",tag:"Edit",icon:"↻"},
  {name:"Add page numbers",desc:"Number pages automatically.",href:"/page-numbers",tag:"Edit",icon:"№"},
  {name:"Add watermark",desc:"Stamp text across your PDF pages.",href:"/watermark-pdf",tag:"Edit",icon:"◈"},
  {name:"Crop PDF",desc:"Trim the visible area on every page.",href:"/crop-pdf",tag:"Edit",icon:"⌗"},
  {name:"Compress PDF",desc:"Reduce PDF size in your browser.",href:"/compress-pdf",tag:"Compress",icon:"▥"},
  {name:"PDF to JPG",desc:"Turn every PDF page into an image.",href:"/pdf-to-jpg",tag:"Convert",icon:"▧"},
  {name:"PDF to Text",desc:"Extract selectable text from a PDF.",href:"/pdf-to-text",tag:"Convert",icon:"T"},
  {name:"PDF to Markdown",desc:"Export PDF text as Markdown pages.",href:"/pdf-to-markdown",tag:"Convert",icon:"M"},
 ]},
 {title:"Converters",description:"Turn your images and documents into the format you need.",tools:[
  {name:"JPG to PDF",desc:"Make a PDF from photos and scans.",href:"/jpg-to-pdf",tag:"Convert",icon:"▧"},
  {name:"Images to WebP",desc:"Convert multiple images to WebP.",href:"/images-to-webp",tag:"Convert",icon:"◫"},
 ]},
 {title:"Image tools",description:"Make images smaller while keeping them useful.",tools:[
  {name:"Compress Image",desc:"Compress JPG, PNG and WebP images.",href:"/compress-image",tag:"Compress",icon:"◫"},
 ]},
 {title:"Video tools",description:"Prepare videos for WhatsApp, email and sharing.",tools:[
  {name:"Compress Video",desc:"Reduce video size with 720p, 480p or quality presets.",href:"/compress-video",tag:"Video",icon:"▷"},
 ]}
];
export default function Home(){return <><section className="container py-14 md:py-20 text-center"><span className="pill">Free browser tools · Private by design</span><h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6 leading-tight">Your files. <span style={{color:"var(--brand)"}}>Under control.</span></h1><p className="muted text-lg md:text-xl max-w-2xl mx-auto mt-5">Compress, convert, merge and organize PDFs, images and videos. Pick a tool and get straight to work.</p><div className="flex justify-center gap-3 mt-8 flex-wrap"><Link className="btn" href="/compress-video">Compress a video</Link><Link className="btn btn-secondary" href="/compress-pdf">Compress a PDF</Link><Link className="btn btn-secondary" href="/jpg-to-pdf">Convert images to PDF</Link></div><p className="text-xs muted mt-5">Supported tools process your files in your browser. No account required.</p></section><section id="tools" className="container pb-16">{groups.map(group=><div key={group.title} className="mb-12 scroll-mt-24"><div className="mb-5"><h2 className="text-2xl md:text-3xl font-bold">{group.title}</h2><p className="muted mt-1">{group.description}</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{group.tools.map(t=><Link href={t.href} key={t.href} className="card hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col min-h-44"><div className="flex items-center justify-between"><span className="text-3xl" style={{color:"var(--brand)"}}>{t.icon}</span><span className="pill">{t.tag}</span></div><h3 className="text-lg font-bold mt-4">{t.name}</h3><p className="muted mt-1 text-sm flex-1">{t.desc}</p><div className="mt-4 font-bold text-sm" style={{color:"var(--brand)"}}>Open tool →</div></Link>)}</div></div>)}</section><section className="container pb-16"><div className="card"><h2 className="text-2xl font-bold">Private by default. Simple by design.</h2><p className="muted mt-3">Zapsquish processes supported files directly on your device. Your documents, photos and videos are not sent to our servers.</p><div className="prose mt-8"><h2>Frequently asked questions</h2><h3>Is Zapsquish free?</h3><p>Yes. Available tools are free without an account.</p><h3>Are my files uploaded?</h3><p>No. Supported file processing happens in your browser on your device.</p><h3>Can I use Zapsquish on my phone?</h3><p>Yes. The tool directory and editors are designed to work on mobile and desktop screens.</p><h3>Do I need to install an app?</h3><p>No. Open Zapsquish in your browser and choose a tool.</p></div></div></section></>}
