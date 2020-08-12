# Generated by Django 3.1 on 2020-08-12 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_remove_shippingaddress_state'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.EmailField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=7),
        ),
    ]
