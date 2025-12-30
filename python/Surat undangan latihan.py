jumlah_surat = int(input("Masukkan Jumlah Surat: "))

kumpulan_surat = []

for i in range(jumlah_surat):
    print(f"\n=== Input Surat Ke-{i+1}===")
    nama = input("Nama Pengirim : ")
    jenis = input("Jenis Surat  : ")
    tanggal = input("Tanggal Surat  : ")

    print("\n=== DATA SURAT ===")
    print("Nama Pengirim    : ", nama)
    print("Jenis Surat      : ", jenis)
    print("Tanggal Surat    : ", tanggal)

    kumpulan_surat.append([nama, jenis, tanggal])

print("\n=== DATA SURAT MASUK ===")
for index, surat in enumerate(kumpulan_surat):
    print(f"{index + 1}. {surat[0]} | {surat[1]} | {surat[2]}")
print("\n========================")