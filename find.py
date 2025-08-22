import os
import glob

def find_unused_images():
    public_dir = "./public"
    project_dir = "."  # tout le projet
    
    # Dossiers à exclure du parcours
    exclude_dirs = {'node_modules', '.git', 'build', 'dist', '.next', 'coverage'}
    
    extensions = ['*.png', '*.jpg', '*.jpeg', '*.svg', '*.gif']
    unused_files = []
    
    # Trouver tous les fichiers images dans public
    for ext in extensions:
        for img_path in glob.glob(os.path.join(public_dir, "**", ext), recursive=True):
            img_name = os.path.basename(img_path)
            found = False
            
            # Parcourir le projet en excluant certains dossiers
            for root, dirs, files in os.walk(project_dir):
                # IMPORTANT: Modifier dirs sur place pour exclure des dossiers
                dirs[:] = [d for d in dirs if d not in exclude_dirs]
                
                for file in files:
                    if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html')):
                        file_path = os.path.join(root, file)
                        try:
                            with open(file_path, 'r', encoding='utf-8') as f:
                                content = f.read()
                                if img_name in content:
                                    found = True
                                    break
                        except:
                            continue
                
                if found:
                    break
            
            if not found:
                unused_files.append(img_path)
    
    return unused_files

# Utilisation
if __name__ == "__main__":
    unused = find_unused_images()
    if unused:
        print("Fichiers non utilisés trouvés:")
        for file in unused:
            print(f"  - {file}")
    else:
        print("Aucun fichier image non utilisé trouvé.")
